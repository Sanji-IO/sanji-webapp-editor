const $inject = [];
class AppController {
  constructor(...injects) {
    AppController.$inject.forEach((item, index) => this[item] = injects[index]);
  }
}

AppController.$inject = $inject;

export default AppController;
