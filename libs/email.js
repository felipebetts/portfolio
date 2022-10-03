import nodemailer from 'nodemailer'

const mailerProdConfig = {
    host: process.env.EMAIL_HOST,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}

class Email {
    async sendEmail() {
        const mailer = nodemailer.createTransport(mailerProdConfig)
        const info = await mailer.sendMail(this)
        return info
    }
}

class ContactEmail extends Email {
    constructor({ name, from, subject, text }) {
        super()
        this.from = process.env.EMAIL_USER
        this.to = process.env.EMAIL_RECEIVER
        this.subject = subject
        this.text = `Message sent from:\nemail: ${from}\nname: ${name}\n\n${text}`
    }
}

export { ContactEmail }
