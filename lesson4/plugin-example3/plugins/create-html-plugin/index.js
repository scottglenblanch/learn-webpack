const fs = require('fs');
const validateOptions = require('schema-utils');

// schema for options object
const schema = {
  type: 'object',
  properties: {
    templatePath: {
      type: 'string'
    }
  }
};

class Index {
  constructor(options = {}){
    validateOptions(schema, options, 'CreateHtmlPlugin');
    this.templatePath = options && options.templatePath
        || './plugins/create-html-plugin/default.html';
  }

  apply(compiler) {
    fs.writeFileSync(
'./dist/index.html',
      this.getTemplate(),
'utf-8'
    );
  }

  getTemplate() {
    return fs.readFileSync(this.templatePath);
  }

}

module.exports = Index;