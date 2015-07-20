var mongoose = require('mongoose/');
var SomeModel = require('../model/SomeModel');
var dbConnection = mongoose.connection;

//Persist a model, each time the DB is open.
//This is only for test purposes.
dbConnection.on("error",console.error);
dbConnection.on("open",function(){
    console.log("Connection to MongoDB = OPEN");
});

//Export the DB module
module.exports = mongoose.connect("mongodb://localhost/somedb");