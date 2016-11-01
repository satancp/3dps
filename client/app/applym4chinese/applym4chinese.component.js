'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './applym4chinese.routes';

export class Applym4chineseComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('3dpsApp.applym4chinese', [ngRoute])
  .config(routes)
  .component('applym4chinese', {
    template: require('./applym4chinese.html'),
    controller: Applym4chineseComponent,
    controllerAs: 'applym4chineseCtrl'
  })
  .name;
