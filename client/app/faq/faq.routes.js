'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/faq', {
      template: '<faq></faq>'
    });
}
