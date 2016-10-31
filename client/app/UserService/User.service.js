'use strict';
const angular = require('angular');

/*@ngInject*/
export function UserService($http) {
	var api = {
      getUsers : function() {
        return $http.get('/api/users');
      },
      getUser : function(id) {
        return $http.get('/api/users/'+id);
      },
      loginUser : function(user) {
        return $http.post('/api/users/login',user);
      },
      addUser : function(user) {
      	return $http.post('/api/users',user);
      },
      updateUser : function(id,user) {
        return $http.put('/api/users/'+id,user);
      },
      checkUser : function(query) {
        return $http.get('/api/solvequerys?api='+query.api+'&type='+query.type+'&content='+query.content+'&auth='+query.auth);
      }
    };
    return api;
}

export default angular.module('3dpsApp.User', [])
  .service('User', UserService)
  .name;
