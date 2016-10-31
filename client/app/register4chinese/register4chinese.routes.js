'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/register4chinese', {
      template: '<register-4-chinese></register-4-chinese>'
    });
}
