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

app.post("/contact_send", (req, res) => {
    // let message = req.body.message;
    // let email = req.body.email;
    let email = "test";
    let message = "test";
    console.log(req.body);

    res.send(email + " " + message);
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);