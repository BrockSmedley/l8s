const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var mongoose = require('mongoose');
var blogRouter = require('./src/api/routes/blog');
require('dotenv').config();

require('dotenv').config();
console.log(process.env);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', () => {
    console.log("Mongoose connected to MongoDB Atlas.");
});

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.send("happy easter");
});

app.post("/login", (req, res) => {
    let password = req.body.password;
    if (password == process.env.ADMIN_PASS) {
        res.send("SUCCESS");
    } else {
        res.status(401).send("NO DICE BABY");
    }
})

app.use("/blog", blogRouter);

// letsencrypt challenge
app.get("/.well-known/acme-challenge/eJ1QxCz7rjx6ELcYpAGRIA1k6n-U9TTe0G15qzt5vt0", (req, res) => {
    res.send("eJ1QxCz7rjx6ELcYpAGRIA1k6n-U9TTe0G15qzt5vt0.iizUDeTa2WBcaE7ywAB0lwYV3yGKMXudAYpPLpLQXkE");
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);