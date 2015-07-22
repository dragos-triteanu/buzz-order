(function(){
    var app = angular.module('home',[]);
    var products = [{name:"SomeProduct",price:27,visible:true,description:"ceva",image:"images/image1.jpg"},
                    {name:"AnotherProduct",price:25,visible:true,description:"altceva",image:"images/image2.jpg"}];

    app.controller('UserController',function(){
        this.products = products;
    });

})();



