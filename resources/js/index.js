(function(){
    var app = angular.module('users',[]);

    app.controller('UserController',['$http',function($http) {
        var home = this;

        $http.get('./User').success(function (data) {
            home.users = data;
        });

        this.addNewUser = function(user){
            console.log(user);
            $http.post('./User',{username:user.username}).success(function(data){
                home.users.push(data);
                user.username = "";
            });
        };

        this.deleteUser = function(user){
            console.log(user);
            $http({method:'POST',content_type:'application/json',url:'./User/'+user._id}).success(function(data){
                var index = home.users.indexOf(user);
                home.users.splice(index,1);
            });
        };
    }]);
})();