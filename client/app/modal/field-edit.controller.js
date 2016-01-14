const $inject = ['$mdDialog', '_'];
class FieldEditController {
  constructor(...injects) {
    FieldEditController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.activate(this.data.type);
  }

  activate(type) {
    if ('radio' === type || 'select' === type ) {
      this.clearOptionField(1, this.fields.length - 1);
      this.fields.push({
        type: 'number',
        defaultValue: 0,
        templateOptions: {
          label: 'Radio Option Count',
          onChange: (newVal) => {
            let i;
            this.clearOptionField(2, this.fields.length - 2);
            for(i=1; i <= newVal; i++) {
              this.addOptionField({
                key: 'templateOptions.options[' + (i-1) + '].label',
                type: 'input',
                templateOptions: {
                  label: 'Option ' + i
                }
              });
            }
          }
        }
      });
    }
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  addOptionField(data) {
    this.data.templateOptions.options.push({
      label: '',
      value: ''
    });
    this.fields.push(data);
  }

  clearOptionField(index, length) {
    this.data.templateOptions.options.splice(0, length);
    this.fields.splice(index, length);
  }

  submit() {
    this.transformCallback();
    this.cancel();
  }
}

FieldEditController.$inject = $inject;

export default FieldEditController;
