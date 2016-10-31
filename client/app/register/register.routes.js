'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/register', {
      template: '<register></register>'
    });
}
