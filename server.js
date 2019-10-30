const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log(process.env);

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.send("happy easter");
});

app.post("/contact_send", async (req, res) => {
    let email = req.body.email;
    let message = req.body.message;
    console.log(email, message);

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'oauth2',
            user: process.env.EMAIL_USER,
            clientId: process.env.EMAIL_CLIENT_ID,
            clientSecret: process.env.EMAIL_CLIENT_SECRET,
            refreshToken: process.env.EMAIL_REFRESH_TOKEN,
            accessToken: process.env.EMAIL_ACCESS_TOKEN
        }
    });
    let info = await transporter.sendMail({
        from: `"L8S Support" <${process.env.EMAIL_USER}>`,
        to: 'brock@smedleyconsulting.com',
        subject: `L8S Contact Form - ${email}`,
        text: `from ${email}
        
        ${message}`
    });
    console.log("message sent: %s", info.messageId);

    res.send("OK");
});

// letsencrypt challenge
app.get("/.well-known/acme-challenge/eJ1QxCz7rjx6ELcYpAGRIA1k6n-U9TTe0G15qzt5vt0", (req, res) => {
    res.send("eJ1QxCz7rjx6ELcYpAGRIA1k6n-U9TTe0G15qzt5vt0.iizUDeTa2WBcaE7ywAB0lwYV3yGKMXudAYpPLpLQXkE");
})

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);