import { ContactEmail } from '../../libs/email'

const SendContactEmail = async (req, res) => {
    if (req.method === 'POST') {
        const { name, from, subject, text } = req.body
        const contactEmail = new ContactEmail({
            name,
            from,
            subject,
            text
        })
        const emailInfo = await contactEmail.sendEmail()
        res.status(200).json(emailInfo)
    } else {
        return res.status(403).json({
            err: 'Invalid HTTP Method'
        })
    }
}

export default SendContactEmail
