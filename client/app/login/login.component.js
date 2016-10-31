'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import User from '../UserService/User.service';
import ipCookie from 'angular-cookie';

import routes from './login.routes';

export class LoginComponent {
  $uibModal;
  animationsEnabled;
  $route;
  $location;
  loginForm;
  ipCookie;
  User; 
  /*@ngInject*/

  constructor($uibModal, $location, $route, ipCookie, User) {
    this.$uibModal = $uibModal;
    this.animationsEnabled = true;
    this.$location = $location;
    this.$route = $route;
    this.loginForm = {};
    this.ipCookie = ipCookie;
    this.User = User;
  }

  cancel () {
    this.dismiss({$value: 'cancel'});
  };

  register() {
    var modalInstance = this.$uibModal.open({
      animation: this.animationsEnabled,
      component: 'register'
    });
  }

  encryptData(data,key) {
    var CryptoJS = require("crypto-js");
    var encrypted = CryptoJS.AES.encrypt(data,key).toString();
    return encrypted;
  }

  decryptData(data,key) {
    var CryptoJS = require("crypto-js");
    var decrypted = CryptoJS.AES.decrypt(data,key).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

  handleLoginBtnClick(loginForm) {
    var encrypted = this.encryptData(loginForm.password, this.ipCookie("Crypto"));
    var origin = loginForm.password;
    loginForm.password = encrypted;
    this.User.loginUser(loginForm)
      .then(response => {
        var decrypted = this.decryptData(response.data.password, this.ipCookie('Crypto'));
        if(decrypted == origin) {
          this.ipCookie('LoginState', 1);
          this.ipCookie('Login', response.data);
          this.dismiss({$value: 'cancel'});
          if(this.ipCookie("Current_language") == "English") {
            this.$location.path('/');
          }
          else {
            this.$location.path('/main4chinese');
          }
          this.$route.reload();
        }
        else {
          alert('Invalid Username/Password!');
        }
      });
  }
}

export default angular.module('3dpsApp.login', [ngRoute])
  .config(routes)
  .component('login', {
    template: require('./login.html'),
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: LoginComponent,
    controllerAs: 'loginCtrl'
  })
  .name;
