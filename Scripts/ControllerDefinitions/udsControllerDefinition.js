/**
 * Created by swetha on 7/17/2015.
 */
var userControllerDefinition=function($scope,getUserData){
   console.log(Date.now());
    getUserData.getAllUsers().success(function(users1){
        console.log(Date.now());
        $scope.users=users1;
    })
}

var detailsControllerDefinition=function($scope,$routeParams,getUserData){
    console.log($routeParams.id);
    console.log(Date.now());
    getUserData.getUser($routeParams.id).success(function(currentUser){
        console.log(Date.now());
        console.log(currentUser[0].FirstName);
        $scope.user=currentUser;

        $scope.UserId=currentUser[0].UserId;
        $scope.Firstname=currentUser[0].FirstName;
        $scope.Lastname=currentUser[0].LastName;
        $scope.Email=currentUser[0].Email;
        $scope.Title=currentUser[0].Title;
        $scope.Phone=currentUser[0].Phone;
        $scope.IsActive=currentUser[0].IsEnabled;
    })

}

var deleteControllerDefinition=function($scope,$deleteUser){

}