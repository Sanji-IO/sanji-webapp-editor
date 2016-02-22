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
            type: 'input',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'input',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'url',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'url',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'email',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'email',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'number',
            data: {
              model: 0,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.min',
                  type: 'number',
                  templateOptions: {
                    label: 'Min'
                  }
                },
                {
                  key: 'templateOptions.max',
                  type: 'number',
                  templateOptions: {
                    label: 'Max'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'number',
                key: '',
                templateOptions: {
                  require: false,
                  min: -65535,
                  max: 65535,
                  label: ''
                }
              }
            }
          },
          {
            type: 'float',
            templateOptions: {
              label: 'FORM_LABEL_FLOAT'
            },
            data: {
              model: 0,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'float',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'password',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'password',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'input',
            optionsTypes: 'ip',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'input',
                optionsTypes: 'ip',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'number',
            optionsTypes: 'port',
            templateOptions: {
              label: 'FORM_LABEL_PORT'
            },
            data: {
              model: 0,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'number',
                optionsTypes: 'port',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'input',
            optionsTypes: 'mac',
            templateOptions: {
              label: 'FORM_LABEL_MAC'
            },
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'input',
                optionsTypes: 'mac',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'input',
            optionsTypes: 'hostname',
            templateOptions: {
              label: 'FORM_LABEL_HOSTNAME'
            },
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'input',
                optionsTypes: 'hostname',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'input',
            optionsTypes: 'aliasName',
            templateOptions: {
              label: 'FORM_LABEL_NAME'
            },
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'input',
                optionsTypes: 'aliasName',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'input',
            optionsTypes: 'latitude',
            templateOptions: {
              label: 'FORM_LABEL_LATITUDE'
            },
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'input',
                optionsTypes: 'latitude',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'input',
            optionsTypes: 'longitude',
            templateOptions: {
              label: 'FORM_LABEL_LONGITUDE'
            },
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'input',
                optionsTypes: 'longitude',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'radio',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                }
              ],
              source: {
                type: 'radio',
                key: '',
                templateOptions: {
                  options: []
                }
              }
            }
          },
          {
            type: 'select',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                }
              ],
              source: {
                type: 'select',
                key: '',
                templateOptions: {
                  options: []
                }
              }
            }
          },
          {
            type: 'checkbox',
            data: {
              model: '',
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'checkbox',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'switch',
            data: {
              model: null,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'switch',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'range',
            data: {
              model: null,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.min',
                  type: 'number',
                  templateOptions: {
                    label: 'Min'
                  }
                },
                {
                  key: 'templateOptions.max',
                  type: 'number',
                  templateOptions: {
                    label: 'Max'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'range',
                key: '',
                templateOptions: {
                  require: false,
                  label: '',
                  min: -65535,
                  max: 65535
                }
              }
            }
          },
          {
            type: 'date',
            data: {
              model: null,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.label',
                  type: 'input',
                  templateOptions: {
                    label: 'Label'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'date',
                key: '',
                templateOptions: {
                  require: false,
                  label: ''
                }
              }
            }
          },
          {
            type: 'datepicker',
            data: {
              model: null,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.placeholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Hint'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'date',
                key: '',
                templateOptions: {
                  require: false,
                  placeholder: ''
                }
              }
            }
          },
          {
            type: 'datetimepicker',
            data: {
              model: null,
              config: [
                {
                  key: 'key',
                  type: 'input',
                  templateOptions: {
                    label: 'Key'
                  }
                },
                {
                  key: 'templateOptions.datePlaceholder',
                  type: 'input',
                  templateOptions: {
                    label: 'Date Hint'
                  }
                },
                {
                  key: 'templateOptions.hourLabel',
                  type: 'input',
                  templateOptions: {
                    label: 'Hour Label'
                  }
                },
                {
                  key: 'templateOptions.minLabel',
                  type: 'input',
                  templateOptions: {
                    label: 'Min Label'
                  }
                },
                {
                  key: 'templateOptions.require',
                  type: 'switch',
                  templateOptions: {
                    label: 'Require'
                  }
                }
              ],
              source: {
                type: 'datetimepicker',
                key: '',
                templateOptions: {
                  require: false,
                  datePlaceholder: '',
                  hourLabel: '',
                  minLabel: ''
                }
              }
            }
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
