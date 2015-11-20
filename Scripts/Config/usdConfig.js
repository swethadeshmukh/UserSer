/**
 * Created by swetha on 7/17/2015.
 */
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.
        when('/details/:id',{
            templateUrl:'Templates/ShowDetails.html',
            controller:'detailsController'
        }).
        when('/delete/:id',{
            controller:'deleteController'
        }).
        otherwise({
            redirectTo:'/details'
        })
}]);



