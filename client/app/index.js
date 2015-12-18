import 'angular-material.css';
import 'toastr.scss';
import './app.style.scss';

import sjCore from 'sanji-core-ui';

// Layout Page
import landing from './landing';

import i18nConfig from './app.i18n';
import appConfig from './app.config';
import AppController from './app.controller';

let app = angular.module('webapp', [
  sjCore,
  ngSortable,
  landing
]);

app.constant('version', __VERSION__);
app.config(i18nConfig);
app.config(appConfig);
app.controller('AppController', AppController);
