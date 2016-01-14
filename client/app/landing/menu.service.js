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
            type: 'input',
            optionsTypes: 'float',
            templateOptions: {
              label: 'FORM_LABEL_PORT'
            },
            data: {
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
                optionsTypes: 'float',
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
