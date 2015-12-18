const $inject = [];
class LandingController {
  constructor(...injects) {
    LandingController.$inject.forEach((item, index) => this[item] = injects[index]);
  }
}

LandingController.$inject = $inject;

export default LandingController;
