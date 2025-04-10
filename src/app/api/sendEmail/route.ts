import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, country, phone, company, message } = data;

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });

        const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Novo Contato Dentro do Portfolio",
        html: `
            <h2>Nova mensagem recebida do formulário:</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${country} ${phone}</p>
            <p><strong>Empresa:</strong> ${company || "Não informado"}</p>
            <p><strong>Mensagem:</strong><br/>${message}</p>
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return NextResponse.json(
        { success: false, error: "Erro ao enviar e-mail" },
        { status: 500 }
        );
    }
}
