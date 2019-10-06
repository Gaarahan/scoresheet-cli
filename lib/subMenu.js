const util = require("../lib/util.js");
const chalk = require('chalk');
const { mainMenu, addMenu, addWrong, searchMenu, searchWrong } = require('../lib/menu.js');
const cliInteract = require('cli-interact');
const question = cliInteract.question;
const getNumber = cliInteract.getNumber;

function correctInput(ans) {
  let ansArr = ans.split(",");
  if(ansArr.length < 3){ return false; }
  let [name,num,...grades] = ansArr;
  // 验证名字以及输入的学号
  if(!/^[\u4e00-\u9fa5A-Za-z]+$/.test(name) || !/^\d+$/.test(num)) return false;
  // 验证输入的每一组成绩的格式
  return grades.every(val => {
    return /^[\u4e00-\u9fa5A-Za-z]+:\d+$/.test(val);
  });
}

function addStudent() {
  console.clear(); // 使用 clear() 来清理控制台
  console.log(chalk.blue(`添加学生及成绩：`));
  let ans = question(addMenu);
  while( !correctInput(ans) ){
    ans = question(addWrong);
  }
  util.storeStudent(ans);
  console.log(chalk.blue(`学生${ans.slice(0,ans.indexOf(','))}的成绩被添加`));
}

function getReport() {
  console.clear(); // 使用 clear() 来清理控制台
  let ans = question(searchMenu);
  while(!/^[\d+,]+$/.test(ans)){
    ans = question(searchWrong);
  }
  util.readStudent(ans);

}

function printErr() {
  console.log(chalk.red(`请输入正确的选择:`));
}

module.exports = {
  addStudent,
  getReport,
  printErr,
};
