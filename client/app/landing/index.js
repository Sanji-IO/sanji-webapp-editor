import sjCore from 'sanji-core-ui';

import './landing.tpl.html';
import route from './landing.route';
import LandingController from './landing.controller.js';

let app = angular.module('webapp.landing', [sjCore]);
app.controller('LandingController', LandingController);
app.run(route);
export default app = app.name
