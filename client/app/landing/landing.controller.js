const $inject = ['menu', '$mdDialog', 'AppService', '_'];
class LandingController {
  constructor(...injects) {
    LandingController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.project = this.AppService.getProjectData();
    this.tabs = this.menu.get();
    this.data = {
      selected: null,
      fields: this.AppService.getFields()
    };
  }

  edit(event) {
    this.$mdDialog.show({
      templateUrl: 'project-edit.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    });
  }

  moved(index) {
    this.data.fields.splice(index, 1);
  }

  backup(data) {
    let payload = _.cloneDeep(this.project);
    payload.fields = data.fields;
    this.AppService.backup(payload);
  }

  restore(event) {
    this.$mdDialog.show({
      templateUrl: 'resource-upload.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    });
  }

  export(data) {
    let payload = _.cloneDeep(this.project);
    payload.fields = data.fields;
    this.AppService.export(payload);
  }
}

LandingController.$inject = $inject;

export default LandingController;
