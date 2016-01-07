const $inject = ['$mdDialog', 'AppService'];
class ProjectEditController {
  constructor(...injects) {
    ProjectEditController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = this.AppService.getProjectData();
    this.fields = this.AppService.getProjectForm();
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  submit(data) {
    this.AppService.callGeneratorSanjiUI(data)
      .then(res => {
        if (undefined === this.data.uuid) {
          this.data.uuid = res.data.uuid;
        }
        this.cancel();
      });
  }
}

ProjectEditController.$inject = $inject;

export default ProjectEditController;
