var mongoose = require('mongoose/');
var SomeModel = require('../model/SomeModel');
var dbConnection = mongoose.connection;

//Persist a model, each time the DB is open.
//This is only for test purposes.
dbConnection.on("error",console.error);
dbConnection.on("open",function(){
    var someModel = SomeModel({
        username:"Someone"
    });
    someModel.save(function(err,model){
        if(err){
            return console.error(err);
        }
        console.log(model);
    });
});

//Export the DB module
module.exports = mongoose.connect("mongodb://localhost/somedb");