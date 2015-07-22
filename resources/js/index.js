(function(){
    var app = angular.module('home',[]);
    var products = [{name:"SomeProduct",value:27,visible:true},
                    {name:"AnotherProduct",value:25,visible:true}];

    app.controller('HomeController',function(){
        this.products = products;
    });

})();



