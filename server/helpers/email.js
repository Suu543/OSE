const dotenv = require('dotenv');

dotenv.config();

exports.signupEmailParams = (recipientEmail, token) => ({
  Source: process.env.EMAIL_FROM,
  Destination: {
    ToAddresses: [recipientEmail],
  },
  ReplyToAddresses: [process.env.EMAIL_TO],
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: `
                      <html>
                          <h1>Verify Your Email Address</h1>
                          <p>Please use the following link to complete your registration:</p>
                          <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                      </html>
                  `,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Complete Your Registration',
    },
  },
});

exports.forgotPasswordEmailParams = (recipientEmail, token) => ({
  Source: process.env.EMAIL_FROM,
  Destination: {
    ToAddresses: [recipientEmail],
  },
  ReplyToAddresses: [process.env.EMAIL_TO],
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: `
                    <html>
                      <h1>Reset Password Link</h1>
                      <p>Please Use the following link to reset your password:</p>
                      <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
                    </html>
              `,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Complete Your Password Reset',
    },
  },
});
