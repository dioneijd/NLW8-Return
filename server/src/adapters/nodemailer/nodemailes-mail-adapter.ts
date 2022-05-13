import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "af9ceb6070aa44",
    pass: "888a017f04837c"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData ) {
    
    await transport.sendMail({
      from: 'FEEDBACK SUPPORT <oi@gmail.com>',
      to: 'Dionei <dionei.jd@gmail.com>',
      subject,
      html: body
    })
  }   
}