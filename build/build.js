/**
 * 功能：读取js文件中头部的注释，生成readme文件中的内容
 */

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const chalk = require('chalk');
const shellExec = require('shell-exec');
const dox = require('dox');
const rmConf = require('./config');

const srcDir = path.resolve(__dirname, '../src');
const output = 'README.md';
const files = srcDir + '/*.js';
const util = require('./util');

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

function generateCodeExample(fileName, code) {
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

function touchReadme() {
  fs.writeFileSync(
    output, afterContent.join('\n'), 'utf8'
  );
}

function getNameByPath(path) {
  return path.replace(srcDir + '/', '').replace('.js', '')
}

function start(){
  afterContent = afterContent.concat(
    rmConf.readmeDescription, 
    rmConf.readmeUsage, 
    rmConf.readmeDevelop
  );

  const globAsync = util.promisify(glob);

  globAsync(files).then( res => {
    afterContent.push('## Examples');

    res.forEach(function (file) {
      console.log(chalk.green('Parsing file: ' + file));
      const fileName = getNameByPath(file);
      if(fileName !== 'index'){
        const rawStr = fs.readFileSync(file, 'utf8');
        const code = dox.parseComments(rawStr);
        generateCodeExample(fileName, code);
      }
    });

    afterContent = afterContent.concat(rmConf.readmeLicense);
    touchReadme();

    generateTable();
  });

}

function generateTable(){
  // afterContent = [];

  shellExec('./gh-md-toc ./README.md').then( res => {
    // 目录生成完毕，重新写入readme中
    afterContent.unshift(res.stdout);
    touchReadme();
    console.log(chalk.green('README生成完毕。'));
  }).catch( err => {
    console.log(chalk.red('生成目录失败'));
    console.log(err);
  })
}

start();