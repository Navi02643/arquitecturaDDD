import nodemailer from "nodemailer";

export class EmailService {
  private transporter: nodemailer.Transporter;
  private email: string = "notificaciones@gmail.com";
  constructor(email: string) {
    this.email = email;
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tucorreo@gmail.com",
        pass: "tucontraseña",
      },
    });
  }

  public sendVerificationEmail(
    to: string,
    subject: string,
    text: string
  ): void {
    const mailOptions: nodemailer.SendMailOptions = {
      from: `${this.email}`,
      to: to,
      subject: subject,
      text: text,
    };

    this.transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Correo electrónico enviado: " + info.response);
      }
    });
  }
}
