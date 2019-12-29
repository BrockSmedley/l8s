const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var mongoose = require('mongoose');
var blogRouter = require('./src/api/routes/blog');
var cors = require('cors');

// .env
require('dotenv').config();
console.log(process.env);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose connection error'));
db.once('open', () => {
    console.log("Mongoose connected to MongoDB Atlas.");
});

// express
const app = express();

// enable CORS (all origins -- TODO: only enable on public-facing endpoints; restrict POST access to /blog)
var corsOptions = {
    // origin: 'https://www.l8s.co',
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// app.use(cors());

// serve static files thru express
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// healthcheck-ish
app.get("/test", (req, res) => {
    res.send("happy easter");
});

// admin (TODO: use this in an auth middleware)
app.post("/login", (req, res) => {
    let password = req.body.password;
    if (password == process.env.ADMIN_PASS) {
        res.send("SUCCESS");
    } else {
        res.status(401).send("NO DICE BABY");
    }
})

// blog endpoints
// TODO: RESTRICT W/ ADMIN_PASS
app.use("/blogpost", blogRouter);

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);