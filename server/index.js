

const express = require('express');
const bodyParser = require('body-parser');
const SendEmail = require("./helpers/SendEmail.js")
const app = express();
const port = 3100;
const cors = require("cors")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.post('/send-message',async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from:'fake_mail@lojiksolutions.com',
    to: 'oladokunchris03@gmail.com',
    subject: 'New message',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  try {
    await SendEmail(mailOptions)
    console.log('message sent successfully...')
  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Error details:', error);
  }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});