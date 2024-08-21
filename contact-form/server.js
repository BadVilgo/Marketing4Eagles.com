const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');  // Import the path module

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "components/public" directory
app.use(express.static(path.join(__dirname, '../public')));

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Configure the transporter with your Gmail credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'adam.performance0@gmail.com',
            pass: 'hmjj hkrn ntnd ekov' // Consider using environment variables or OAuth2 for better security
        }
    });

    // Setup email data
    const mailOptions = {
        from: email,
        to: 'adam.performance0@gmail.com',
        subject: `Nowa wiadomość od ${name}`,
        text: `Otrzymałeś wiadomość od ${name} (${email}):\n\n${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Wystąpił błąd: ' + error.message);
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Wiadomość wysłana pomyślnie!');
        }
    });
});

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));  // Serve index.html
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
