import sjCore from 'sanji-core-ui';

import './landing.tpl.html';
import '../modal/project-edit.tpl.html';
import '../modal/resource-upload.tpl.html';
import './landing.style.scss';
import '../modal/resource-upload.style.scss';
import route from './landing.route';
import LandingController from './landing.controller';
import ProjectEditController from '../modal/project-edit.controller';
import ResourceUploadController from '../modal/resource-upload.controller';
import MenuService from './menu.service';

let app = angular.module('webapp.landing', [sjCore]);
app.controller('LandingController', LandingController);
app.controller('ProjectEditController', ProjectEditController);
app.controller('ResourceUploadController', ResourceUploadController);
app.service('menu', MenuService);
app.run(route);
export default app = app.name
