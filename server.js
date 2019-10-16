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
            // TODO: use something more secure than an App password; set up OAuth
            // user: process.env.EMAIL_USER,
            // pass: process.env.EMAIL_PASS
            user: testAccount.user,
            pass: testAccount.pass
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

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);