'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './faq.routes';

export class FaqComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('3dpsApp.faq', [ngRoute])
  .config(routes)
  .component('faq', {
    template: require('./faq.html'),
    controller: FaqComponent,
    controllerAs: 'faqCtrl'
  })
  .name;
