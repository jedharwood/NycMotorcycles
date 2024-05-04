import { NextApiResponse, NextApiRequest } from 'next'
import Mailgun, { 
  MailgunClientOptions, 
  MessagesSendResult 
} from 'mailgun.js'

const mailer = async (
  req: NextApiRequest, 
  res: NextApiResponse
): Promise<void> => {
  const pE = process.env;
  const mg = new Mailgun(FormData)
  const options: MailgunClientOptions = {
    username: 'api',
    key: pE.MAILGUN_API_KEY
  }
  const client = mg.client(options)
  const data = req.body
  const messageData = {
    from: data.email,
    to: pE.DELIVERY_EMAIL,
    subject: data.subject,
    html: `
      <p>Sender Email: ${data.email}</p>
      <p>Sender Name: ${data.senderName}</p>
      <h2>${data.subject}</h2>
      <p>${data.message}</p>
    `
  };

  try {
    const response: MessagesSendResult = await client.messages
      .create(pE.MAILGUN_DOMAIN, messageData)
    
    res.status(response.status).json({ message: response.message })
  } catch (error) {
    res.status(500).json({ message: 'Message sending failed' })
  }
}

export default mailer