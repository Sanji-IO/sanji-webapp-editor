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

  _transformField(index, field) {
    const tmp = this._.cloneDeep(field.data);
    if ('radio' === field.type || 'select' === field.type) {
      // remove side effect
      delete tmp.source['1'];
    }
    let newField = Object.assign({}, tmp.source);
    newField.data = this._.cloneDeep(field.data);
    this.data.fields.splice(index, 1, newField);
  }

  editProject(event) {
    this.$mdDialog.show({
      templateUrl: 'project-edit.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      controller: 'ProjectEditController',
      controllerAs: 'vm',
      bindToController: true
    });
  }

  editField(event, index, field) {
    this.$mdDialog.show({
      templateUrl: 'field-edit.tpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      controller: 'FieldEditController',
      controllerAs: 'vm',
      locals: {
        data: field.data.source,
        fields: field.data.config,
        transformCallback: () => {
          this._transformField(index, field);
        }
      },
      bindToController: true
    });
  }

  moved(index) {
    this.data.fields.splice(index, 1);
  }

  backup(data) {
    let payload = this._.cloneDeep(this.project);
    payload.fields = this._.pluck(data.fields, 'data.source');
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
