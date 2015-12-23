const $inject = ['menu'];
class LandingController {
  constructor(...injects) {
    LandingController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.tabs = this.menu.get();
    this.data = {
      windowName: '',
      selected: null,
      fields: []
    };
  }
}

LandingController.$inject = $inject;

export default LandingController;
