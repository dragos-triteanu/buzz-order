/**
 * Controller module that houses a controller definition for the home page.
 * For the momment it only contains a GET and a POST operation of the /User mapping.
 * @type {exports}
 */
var SomeModel = require('../model/SomeModel');
var bodyParser = require('body-parser');

/**
 * Creates an instance of a HomeController, having it's mappings configured.
 * Uses a express.js Router in order to support REST operations for the same handler mapping.
 * @param express an express object instance.
 * @returns {new HomeController instance}
 * @constructor
 */
var HomeController = function(express){
    var homeController = express.Router();

    /**
     * Controller for '/' mapping that sends a static html file.
     *
     * __dirname variable is node's notion of classpath/application path.
     */
    homeController.route('/')
        .get(function(request,response){
            response.sendFile("index.html");
        });

    /**
     * Illustration of the use of path variables.The status code 201 is just to illustrate
     * the use of status.
     */
    homeController.route('/dynamic/:pathParam').get(function(request,response){
        response.status(201).send("Accessed the "+request.params.pathParam + " mapping");
    });

    homeController.route('/User')
        .get(function(request,response){

           if(request.query.id != null){
               var user = {name:"User"};
               user.id = request.query.id;

               response.json(user);
           }else{
               SomeModel.find(function(err,model){
                       if(err){
                            console.log(err);
                        }
                   response.json(model);
                });
           }
        })
        .post(bodyParser.json(),function(request,response){
            console.log(request.body);
            var anotherObj = {body:request.body};
            response.send(anotherObj);
        });


    return homeController;
}

//Export the HomeController instance
module.exports = function(express){
    return HomeController(express);
};
