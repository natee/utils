/**
 * 功能：读取js文件中头部的注释，生成readme文件中的内容
 */

var path = require('path');
var fs = require('fs');
var glob = require('glob');
var chalk = require('chalk');
var dox = require('dox');

var srcDir = path.resolve(__dirname, '../src');
var output = 'README.md';
var files = srcDir + '/*.js';

var afterContent = [
  '# utils',
  'JavaScript中常用的一些函数',
  '## 函数',
];

function generate(tag){
  var r = [];
  if(tag.type === 'example'){
    r.push('```javascript');
    r.push(`${tag.string}`);
    r.push('```\n');
  }
  return r;
}

function writeFile(){
  fs.writeFileSync(
    output, afterContent.join('\n'), 'utf8'
  );
}

glob(files, {}, function (err, files) {

  files.forEach(function (file) {
    console.log(chalk.green('Parsing file: ' + file));
    var fileName = file.replace(srcDir + '/','').replace('.js','');
    var rawStr = fs.readFileSync(file, 'utf8');
    var code = dox.parseComments(rawStr);

    code.forEach(v => {
      var commentTags = v.tags;

      var description = v.description;

      afterContent.push(`### ${fileName}.js`);
      afterContent.push(`${description.full}\n`.replace(/\<\/?p\>/g,''));

      for(var i = 0; i < v.tags.length; i++){
        afterContent = afterContent.concat(generate(v.tags[i]))
      }

    });

    writeFile();

  });
});