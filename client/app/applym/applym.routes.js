'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/applym', {
      template: '<applym></applym>'
    });
}
