const inquirer = require('inquirer');
const chalk = require('chalk');
const {addStudent,getReport,printErr} = require('../lib/subMenu.js')

function resolveAndOpenNextMenu(ans){
    let input = ans['menuNum'];
    switch (input) {
      case 1 :
        addStudent();
        break;
      case 2 :
        getReport();
        break;
      case 3 :
        process.exit();
        break;
      default:
        printErr();
        break;
    }
    showMenu(resolveAndOpenNextMenu);
}
function showMenu(resolve){
  console.clear();
  console.log(chalk.blue('********** 学生成绩管理 **********'));
  return inquirer.prompt([{
    name : 'menuNum',
    message : '选择您要使用的功能',
    type : 'list',
    choices : [
      {
        name : '添加学生',
        value : 1,
      },
      {
        name : '生成成绩单',
        value : 2,
      },
      {
        name : '退出',
        value : 3,
      },
    ]
  }]).then(resolve);
}

module.exports = {showMenu,resolveAndOpenNextMenu};
