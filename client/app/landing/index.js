import sjCore from 'sanji-core-ui';

import './landing.tpl.html';
import './landing.style.scss';
import route from './landing.route';
import LandingController from './landing.controller';
import MenuService from './menu.service';

let app = angular.module('webapp.landing', [sjCore]);
app.controller('LandingController', LandingController);
app.service('menu', MenuService);
app.run(route);
export default app = app.name
