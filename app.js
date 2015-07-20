var express = require("express");
var app = express();
var port = 3000;

var SomeModel = require('./model/SomeModel');
var db = require("./db/DB");
var logger = require('./logger/Logger');
var homeController = require("./controller/HomeController")(express);


/**
 * Configurations
 */
//Indicated to node that 'resources/views' will be used as folder for using static html.
app.use(express.static('resources/views'));
app.use(express.static('resources'));
//Configuring node to use the JSON body parser for requests.




app.use(logger);
app.use("/",homeController);


app.listen(port, function () {
    console.log("Express started and Listening on port " + port);
});


