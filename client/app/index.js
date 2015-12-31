import 'angular-material.css';
import 'toastr.scss';
import './app.style.scss';

import sjCore from 'sanji-core-ui';
import 'angular-file-saver';
import 'angular-drag-and-drop-lists';

// Layout Page
import landing from './landing';

import i18nConfig from './app.i18n';
import appConfig from './app.config';
import AppController from './app.controller';
import AppService from './app.service';

let app = angular.module('webapp', [
  sjCore,
  'ngFileSaver',
  'dndLists',
  landing
]);

app.constant('version', __VERSION__);
app.config(i18nConfig);
app.config(appConfig);
app.controller('AppController', AppController);
app.service('AppService', AppService);

