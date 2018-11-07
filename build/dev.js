const shellExec = require('shell-exec');
const chalk = require('chalk');
const chokidar = require('chokidar');
const util = require('./util');

util.log(chalk.green('已启动监听服务...'));


// One-liner for current directory, ignores .dotfiles
chokidar.watch(['./src', './build/config.js'], {
  ignored: (path, stats) => {
    return stats && stats.isDirectory();
  }
}).on('all', (event, path) => {
  util.log('文件变动类型：', event, '文件路径：', path);
  
  if(path !== 'src/index.js'){
    util.log(chalk.yellow('正在生成readme'));
    shellExec('npm run readme').then( res => {
      util.log(chalk.green('已重新生成readme'));
    })
  }else{
    shellExec('npm run clean && cross-env NODE_ENV=development rollup -c').then( res => {
      util.log(chalk.green('已重新生成dist/cm-utils.js'))
    }).catch( err => {
      util.log(err);
    })
  }
  
});