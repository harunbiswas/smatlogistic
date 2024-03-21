import nodemailer from 'nodemailer'

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shopforeco@gmail.com', // Your Gmail email address
    pass: 'njlu esnh ztoh xabz', // Your Gmail password or app-specific password
  },
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Send email 1
      await sendEmail1(req.body, req.body.email)

      // Send email 2
      await sendEmail2(req.body, req.body.email)

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
    subject: 'Subject of Email 1',
    text: 'Thnaks for the order. your session id is: ' + queryParams.sessionId,
  }

  await transporter.sendMail(mailOptions)
}

async function sendEmail2(queryParams, recipientEmail) {
  // Use the Nodemailer transporter to send email 2
  const mailOptions = {
    from: 'support@thesmartlogistics.com',
    to: 'support@thesmartlogistics.com',
    subject: 'Subject of Email 2',
    text: 'Order confirmed:\n\n' + formatQueryParams(queryParams),
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
