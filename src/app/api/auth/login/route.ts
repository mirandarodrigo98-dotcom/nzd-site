import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, senha } = body;

    if (!email || !senha) {
      return NextResponse.json({ erro: "E-mail e senha são obrigatórios." }, { status: 400 });
    }

    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      return NextResponse.json({ erro: "Credenciais inválidas." }, { status: 401 });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return NextResponse.json({ erro: "Credenciais inválidas." }, { status: 401 });
    }

    // Login com sucesso (Em um projeto real de produção, aqui nós geraríamos um token JWT e salvaríamos nos cookies)
    // Para simplificar e mostrar a interface, vamos retornar sucesso.
    return NextResponse.json({ sucesso: true, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } });

  } catch (erro) {
    console.error("Erro no login:", erro);
    return NextResponse.json({ erro: "Erro interno no servidor." }, { status: 500 });
  }
}