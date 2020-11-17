const nodemailer = require('nodemailer')

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.FROM_EMAIL_PASSWORD,
    },
  })

  const { name, email, phone, message } = JSON.parse(req.body)

  const content = {
    to: process.env.EMAIL,
    from: process.env.EMAIL,
    replyTo: email,
    subject: `Uusi viesti henkilöltä ${name}`,
    text: message,
    html: `
    <p>Nimi: ${name}</p>
    <p>Sähköposti: ${email}</p>
    <p>Puhelinnumero: ${phone}</p>
    <p>Viesti: ${message}</p>
    `,
  }

  try {
    await transporter.sendMail(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}