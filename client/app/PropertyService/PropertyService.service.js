'use strict';
const angular = require('angular');

/*@ngInject*/
export function PropertyServiceService($http) {
	var api = {
      getProperties : function() {
        return $http.get('/api/propertys');
      },
      getProperty : function(id) {
        return $http.get('/api/propertys/'+id);
      },
      addProperty : function(property) {
      	return $http.post('/api/propertys',property);
      },
      updateProperty : function(id,property) {
        return $http.put('/api/propertys/'+id,property);
      },
      checkProperty : function(query) {
        return $http.get('/api/solvequerys?api='+query.api+'&type='+query.type+'&content='+query.content+'&auth='+query.auth);
      }
    };
    return api;
}

export default angular.module('3dpsApp.PropertyService', [])
  .service('PropertyService', PropertyServiceService)
  .name;
