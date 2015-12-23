const $inject = ['_'];
class MenuService {
  constructor(...injects) {
    MenuService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.sections = [
      {
        name: 'Form Elements',
        type: 'form',
        elements: [
          {
            type: 'input'
          },
          {
            type: 'url'
          },
          {
            type: 'email'
          },
          {
            type: 'number'
          },
          {
            type: 'input',
            optionsTypes: 'float',
            templateOptions: {
              label: 'FORM_LABEL_PORT'
            }
          },
          {
            type: 'password'
          },
          {
            type: 'input',
            optionsTypes: 'ip'
          },
          {
            type: 'number',
            optionsTypes: 'port',
            templateOptions: {
              label: 'FORM_LABEL_PORT'
            }
          },
          {
            type: 'input',
            optionsTypes: 'mac',
            templateOptions: {
              label: 'FORM_LABEL_MAC'
            }
          },
          {
            type: 'input',
            optionsTypes: 'hostname',
            templateOptions: {
              label: 'FORM_LABEL_HOSTNAME'
            }
          },
          {
            type: 'input',
            optionsTypes: 'aliasName',
            templateOptions: {
              label: 'FORM_LABEL_NAME'
            }
          },
          {
            type: 'input',
            optionsTypes: 'latitude',
            templateOptions: {
              label: 'FORM_LABEL_LATITUDE'
            }
          },
          {
            type: 'input',
            optionsTypes: 'longitude',
            templateOptions: {
              label: 'FORM_LABEL_LONGITUDE'
            }
          },
          {
            type: 'radio'
          },
          {
            type: 'select'
          },
          {
            type: 'checkbox'
          },
          {
            type: 'switch'
          },
          {
            type: 'range'
          },
          {
            type: 'date'
          },
          {
            type: 'datepicker'
          },
          {
            type: 'datetimepicker'
          }
        ]
      }
    ];
  }

  get() {
    return this.sections;
  }

  getByType(type) {
    let tmp = _.find(this.sections, {type: type});
    return tmp.elements;
  }
}

MenuService.$inject = $inject;

export default MenuService;
