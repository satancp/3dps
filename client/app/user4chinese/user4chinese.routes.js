'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/user4chinese', {
      template: '<user-4-chinese></user-4-chinese>'
    });
}
