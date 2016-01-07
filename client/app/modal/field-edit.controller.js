const $inject = ['$mdDialog'];
class FieldEditController {
  constructor(...injects) {
    FieldEditController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  submit() {
    this.transformCallback();
    this.cancel();
  }
}

FieldEditController.$inject = $inject;

export default FieldEditController;
