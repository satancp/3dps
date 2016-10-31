'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
import User from '../UserService/User.service';
import ipCookie from 'angular-cookie';

import routes from './register4chinese.routes';

export class Register4chineseComponent {
  /*@ngInject*/
  $route;
  $location;
  registrationForm;
  ipCookie;
  User; 

  constructor($location, $route, ipCookie, User) {
    this.$location = $location;
    this.$route = $route;
    this.registrationForm = {
      username: "",
      password: "",
      maintancelist: [],
      ifadmin: false,
      address2: ""
    };
    this.ipCookie = ipCookie;
    this.User = User;
  }

  cancel() {
    this.dismiss({$value: 'cancel'});
  };

  $onInit() {

  }

  gettosignin() {
    this.$location.path('/login');
    this.$route.reload();
  }

  encryptData(data,key) {
    var CryptoJS = require("crypto-js");
    var encrypted = CryptoJS.AES.encrypt(data,key).toString();
    return encrypted;
  }

  handleRegBtnClick(registrationForm) {
    var encrypted = this.encryptData(registrationForm.password, this.ipCookie("Crypto"));
    registrationForm.password = encrypted;
    this.User.addUser(registrationForm)
      .then(response => {
        alert("注册成功！");
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
    });
  }
}

export default angular.module('3dpsApp.register4chinese', [ngRoute])
  .config(routes)
  .component('register4chinese', {
    template: require('./register4chinese.html'),
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: Register4chineseComponent,
    controllerAs: 'register4chineseCtrl'
  })
  .name;
