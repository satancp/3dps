'use strict';
const angular = require('angular');

/*@ngInject*/
export function CryptoService($http) {
	var api = {
      getKey : function() {
      	return $http.get('/api/cryptos/');
      }
    };
    return api;
}

export default angular.module('3dpsApp.Crypto', [])
  .service('Crypto', CryptoService)
  .name;
