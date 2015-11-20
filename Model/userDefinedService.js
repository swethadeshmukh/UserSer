/**
 * Created by swetha on 7/16/2015.
 */
app.factory('getUserData',function($http){
  return{
      getAllUsers:function(){
        var url="http://localhost:15513/api/users";
          return $http.get(url);
      },

      getUser:function(userid){
          console.log(userid);
       var url="http://localhost:15513/api/users/GetUser/"+userid;
          return $http.get(url);
      }
  };
});
