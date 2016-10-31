import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';
import Crypto from '../CryptoService/Crypto.service';
import ipCookie from 'angular-cookie';

export class MainController {
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

export default angular.module('3dpsApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
