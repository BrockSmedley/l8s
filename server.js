const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
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

// letsencrypt challenge
app.get("/.well-known/acme-challenge/eJ1QxCz7rjx6ELcYpAGRIA1k6n-U9TTe0G15qzt5vt0", (req, res) => {
    res.send("eJ1QxCz7rjx6ELcYpAGRIA1k6n-U9TTe0G15qzt5vt0.iizUDeTa2WBcaE7ywAB0lwYV3yGKMXudAYpPLpLQXkE");
})

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);