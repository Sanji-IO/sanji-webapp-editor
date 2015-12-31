const $inject = ['rest', 'FileSaver', 'Blob', '_'];
class AppService {
  constructor(...injects) {
    AppService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data = {
      fields: [],
      project: {},
      projectForm: [
        {
          key: 'realname',
          type: 'input',
          defaultValue: '',
          templateOptions: {
            label: 'Author'
          }
        },
        {
          key: 'email',
          type: 'email'
        },
        {
          key: 'moduleName',
          type: 'input',
          defaultValue: '',
          templateOptions: {
            label: 'Application Name'
          }
        },
        {
          key: 'version',
          type: 'input',
          defaultValue: '1.0.0',
          templateOptions: {
            label: 'Version'
          }
        },
        {
          key: 'description',
          type: 'input',
          defaultValue: '',
          templateOptions: {
            label: 'Description'
          }
        },
        {
          key: 'isCollection',
          type: 'radio',
          defaultValue: false,
          templateOptions: {
            options: [
              {
                label: 'Resource is model',
                value: false
              },
              {
                label: 'Resource is collection',
                value: true
              }
            ]
          }
        },
        {
          key: 'basePath',
          type: 'input',
          defaultValue: '/api/v1',
          templateOptions: {
            require: true,
            label: 'Base Path'
          }
        },
        {
          key: 'endpoint',
          type: 'input',
          defaultValue: '',
          templateOptions: {
            require: true,
            label: 'Endpoint'
          }
        }
      ]
    };
  }

  getFields() {
    return this.data.fields;
  }

  setFields(data) {
    let fields = this.data.fields;
    let length = fields.length;
    fields.splice.apply(fields, [0, length].concat(data));
  }

  getProjectForm() {
    return this.data.projectForm;
  }

  getProjectData() {
    return this.data.project;
  }

  setProjectData(data) {
    let form = this.getProjectForm();
    let keys = this._.pluck(form, 'key');
    keys.forEach(key => {
      if ('realname' === key) {
        this.data.project[key] = data.author.name;
        return;
      }
      if ('email' === key) {
        this.data.project[key] = data.author.email;
        return;
      }
      if ('moduleName' === key) {
        this.data.project[key] = data.title;
        return;
      }
      if ('isCollection' === key) {
        this.data.project[key] = 'collection' === data.get.type ? true : false;
        return;
      }
      if ('endpoint' === key) {
        this.data.project[key] = data.get.url;
        return;
      }
      this.data.project[key] = data[key];
    });

    this.data.project.uuid = data.uuid;
  }

  callGeneratorSanjiUI(data) {
    return this.rest.post('/generator', data);
  }

  backup(data) {
    this.rest.put('/generator/backup', data)
      .then(res => {
        var blob = new this.Blob([JSON.stringify(res.data)], {
          type: 'application/json'
        });
        //saveAs provided by FileSaver.js
        this.FileSaver.saveAs(blob, 'component.resource.json');
      });
  }

  export(data) {
    this.rest.put('/generator/export', data, null, {responseType: 'arraybuffer'})
      .then(res => {
        var blob = new this.Blob([res.data], {
          type: 'application/octet-stream'
        });
        //saveAs provided by FileSaver.js
        this.FileSaver.saveAs(blob, data.uuid + '.tar.gz');
      });
  }
}

AppService.$inject = $inject;

export default AppService;
