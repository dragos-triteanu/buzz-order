var express = require("express");
var app = express();
var port = 3000;

var SomeModel = require('./model/SomeModel');
var db = require("./db/DB");

//Indicated to node that 'resources/views' will be used as folder for using static html.
/**
 * Configurations
 */
app.use(express.static('resources/views'));
app.use(express.static('resources'));

var homeController = require("./controller/HomeController")(express);

app.use("/",homeController);


app.listen(port, function () {
    console.log("Express started and Listening on port " + port);
});


