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
    const jsOutputFileName = compiler.options.output.filename;

    fs.writeFileSync(
'./dist/index.html',
      this.getTemplate(jsOutputFileName),
'utf-8'
    );
  }

  getTemplate(jsOutputFileName) {
    return fs
      .readFileSync(this.templatePath, 'utf-8')
      .replace(
'</body>',
`<script src="${jsOutputFileName}"></script>\n</body>`
      );
  }

}

module.exports = Index;