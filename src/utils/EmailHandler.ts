require("dotenv").config();

interface ISendRegisteredSuccessEmail {
  email: string;
  name: string;
}

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_SENDER, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

class EmailHandler {
  async sendRegisteredSuccessEmail({
    email,
    name,
  }: ISendRegisteredSuccessEmail) {
    let info = await transporter.sendMail({
      from: '"André Melo 👻" <andrermelo1@hotmail.com>', // sender address
      to: email, // list of receivers
      subject: "Cadastro confirmado!", // Subject line
      text: `Olá ${name}, bem-vindo(a) à nossa plataforma :D.
      Seu cadastro foi efetuado com sucesso.`, // plain text body
      html: `<b>Olá ${name}, bem-vindo(a) à nossa plataforma :D.</b><br>
      <p style="color: #00ff00">Seu cadastro foi efetuado com sucesso.</p>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
  }
}

export { EmailHandler };
