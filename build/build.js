/**
 * 功能：读取js文件中头部的注释，生成readme文件中的内容
 */

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const chalk = require('chalk');
const dox = require('dox');
const rmConf = require('./config');

const srcDir = path.resolve(__dirname, '../src');
const output = 'README.md';
const files = srcDir + '/*.js';

let afterContent = [];

function generate(tag) {
  let r = [];
  if (tag.type === 'example') {
    r.push('```javascript');
    r.push(`${tag.string}`);
    r.push('```\n');
  }
  return r;
}

function generateCodeExample(path, code) {
  const fileName = getNameByPath(path);
  code.forEach(v => {
    const commentTags = v.tags;
    const description = v.description;

    afterContent.push(`### ${fileName}.js`);
    afterContent.push(`${description.full}\n`.replace(/\<\/?p\>/g, ''));

    for (let i = 0; i < v.tags.length; i++) {
      afterContent = afterContent.concat(generate(v.tags[i]))
    }

  });
}

function writeFile() {
  fs.writeFileSync(
    output, afterContent.join('\n'), 'utf8'
  );
  afterContent = [];
  console.log(chalk.green('README生成完毕。'));
}

function getNameByPath(path) {
  return path.replace(srcDir + '/', '').replace('.js', '')
}

function start(){
  afterContent = afterContent.concat(rmConf.readmeDescription, rmConf.readmeUsage);

  glob(files, {}, function (err, files) {
    afterContent.push('## Examples');

    files.forEach(function (file) {
      console.log(chalk.green('Parsing file: ' + file));
      const rawStr = fs.readFileSync(file, 'utf8');
      const code = dox.parseComments(rawStr);
      generateCodeExample(file, code);
    });

    afterContent = afterContent.concat(rmConf.readmeLicense);
  
    writeFile();
  });
}

start();