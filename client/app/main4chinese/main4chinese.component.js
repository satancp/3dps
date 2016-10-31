'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import Crypto from '../CryptoService/Crypto.service';
import ipCookie from 'angular-cookie';

import routes from './main4chinese.routes';

export class Main4chineseComponent {
  /*@ngInject*/
  $http;
  socket;
  Crypto;
  ipCookie;
  
  constructor($http, socket, Crypto, ipCookie) {
    this.$http = $http;
    this.socket = socket;
    this.Crypto = Crypto;
    this.ipCookie = ipCookie;
  }

  $onInit() {
    this.Crypto.getKey().then(response => {
      this.ipCookie('Crypto', response.data);
    });
  }
}

export default angular.module('3dpsApp.main4chinese', [ngRoute])
  .config(routes)
  .component('main4chinese', {
    template: require('./main4chinese.html'),
    controller: Main4chineseComponent,
    controllerAs: 'main4chineseCtrl'
  })
  .name;
