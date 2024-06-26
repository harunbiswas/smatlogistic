import nodemailer from 'nodemailer'

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  service: 'gmail',
  auth: {
    user: 'shopforeco@gmail.com', // Your Gmail email address
    pass: 'njluesnhztohxabz', // Your Gmail password or app-specific password
  },
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      if (req.body.preSend) {
        await sendEmailPre(req.body, req.body.email)
      } else {
        // Send email 1
        await sendEmail1(req.body, req.body.email)

        // Send email 2
        await sendEmail2(req.body, req.body.email)
      }

      // Respond with a success message
      res.status(200).json({ message: 'Success' })
    } catch (error) {
      console.error('Error:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    // Return a 404 for other HTTP methods
    res.status(404).end()
  }
}

async function sendEmail1(queryParams, recipientEmail) {
  // Use the Nodemailer transporter to send email 1
  const mailOptions = {
    from: 'support@thesmartlogistics.com',
    to: recipientEmail,
    subject: 'Order Successfully Processed',
    text:
      'Thnaks for the order. your order id is: ' +
      '\n\n' +
      'Order confirmed:\n\n' +
      formatQueryParams(queryParams) +
      '\n\n' +
      queryParams.sessionId,
  }

  await transporter.sendMail(mailOptions)
}

async function sendEmail2(queryParams, recipientEmail) {
  // Use the Nodemailer transporter to send email 2
  const mailOptions = {
    from: 'support@thesmartlogistics.com',
    to: 'support@thesmartlogistics.com',
    subject: 'You Got New Transport Order From thesmartlogistics ',
    text: 'Order confirmed:\n\n' + formatQueryParams(queryParams),
  }

  await transporter.sendMail(mailOptions)
}

async function sendEmailPre(queryParams, recipientEmail) {
  // Use the Nodemailer transporter to send email 2
  const mailOptions = {
    from: 'support@thesmartlogistics.com',
    to: 'support@thesmartlogistics.com',
    // to: 'harunbiswasrubel@gmail.com',
    // to: 'mhs@wpmhs.com',
    subject: 'You got new customer  details',
    text: 'customer  details:\n\n' + formatQueryParams(queryParams),
  }

  await transporter.sendMail(mailOptions)
}

function formatQueryParams(queryParams) {
  // Format key-value pairs from queryParams
  const formattedParams = Object.entries(queryParams)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')

  return formattedParams
}
