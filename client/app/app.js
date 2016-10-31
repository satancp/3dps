'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ipCookie from 'angular-cookie';
import crypto from 'crypto-js';
import 'angular-socket-io';
const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import login from './login/login.component';
import user from './user/user.component';
import faq from './faq/faq.component';
import register from './register/register.component';
import main4chinese from './main4chinese/main4chinese.component';
import login4chinese from './login4chinese/login4chinese.component';
import user4chinese from './user4chinese/user4chinese.component';
import register4chinese from './register4chinese/register4chinese.component';
import faq4chinese from './faq4chinese/faq4chinese.component';
import CryptoService from './CryptoService/Crypto.service';
import UserService from './UserService/User.service';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.css';

angular.module('3dpsApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', ngRoute,
    uiBootstrap, CryptoService, navbar, UserService, footer, main, login, user, register, faq, faq4chinese, main4chinese, login4chinese, user4chinese, register4chinese, constants, ipCookie, socket, util
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['3dpsApp'], {
      strictDi: true
    });
  });
