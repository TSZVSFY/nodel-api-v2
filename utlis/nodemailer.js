const nodemailer = require('nodemailer')

const nodeMail = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.163.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
})

module.exports = nodeMail