'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/detailm', {
      template: '<detailm></detailm>'
    });
}
