var express = require("express");
var app = express();
var port = 3000;

var SomeModel = require('./model/SomeModel');

app.use(express.static('resources'));

var db = require("./db/DB");


var homeController = require("./controller/HomeController")(express);

app.use("/",homeController);


app.listen(port, function () {
    console.log("Express started and Listening on port " + port);
});


