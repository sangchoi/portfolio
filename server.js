// REQUIRED
var express = require("express");
var app = express();

// MIDDLEWARE
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));


app.get("/", function(req, res) {
    res.render("index");
});

app.get("/profile", function(req, res) {
    res.render("profile")
})

app.get("/portfolio", function(req, res) {
    res.render("portfolio")
})

app.get("/resume", function(req, res) {
    res.render("resume")
})


// Port setup
var server = app.listen(process.env.PORT || 3000);

module.exports = server;