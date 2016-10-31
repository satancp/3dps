'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './user4chinese.routes';

export class User4chineseComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('3dpsApp.user4chinese', [ngRoute])
  .config(routes)
  .component('user4chinese', {
    template: require('./user4chinese.html'),
    controller: User4chineseComponent,
    controllerAs: 'user4chineseCtrl'
  })
  .name;