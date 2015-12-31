const $inject = ['$mdDialog', 'AppService'];
class ResourceUploadController {
  constructor(...injects) {
    ResourceUploadController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  upload(files) {
    files.forEach(file => {
      let reader = new FileReader();
      reader.onload = (e) => {
        let config = JSON.parse(e.target.result);
        this.AppService.setProjectData(config);
        this.AppService.setFields(config.fields);
        this.cancel();
      };
      reader.readAsText(file);
    });
  }
}

ResourceUploadController.$inject = $inject;

export default ResourceUploadController;
