'use strict';
const angular = require('angular');

/*@ngInject*/
export function MaintanceServiceService($http) {
	var api = {
      getMaintances : function() {
        return $http.get('/api/maintances');
      },
      getMaintance : function(id) {
        return $http.get('/api/maintances/'+id);
      },
      addMaintance : function(maintance) {
      	return $http.post('/api/maintances',maintance);
      },
      checkM : function(user) {
      	return $http.post('/api/maintances/checkM',user);
      },
      updateMaintance : function(id,maintance) {
        return $http.put('/api/maintances/'+id,maintance);
      },
      checkMaintance : function(query) {
        return $http.get('/api/solvequerys?api='+query.api+'&type='+query.type+'&content='+query.content+'&auth='+query.auth);
      }
    };
    return api;
}

export default angular.module('3dpsApp.MaintanceService', [])
  .service('MaintanceService', MaintanceServiceService)
  .name;
