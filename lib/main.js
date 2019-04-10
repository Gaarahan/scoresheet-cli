const cliInteract = require('cli-interact');
const question = cliInteract.question;
const getNumber = cliInteract.getNumber;

const util = require("./util.js");
const { mainMenu, addMenu, addWrong, searchMenu, searchWrong } = require('./menu.js');

function correctInput(ans) {
  let ansArr = ans.split(",");
  if(ansArr.length < 3){
    return false;
  }
  let [name,num,...grades] = ansArr;
  if(!/^[\u4e00-\u9fa5A-Za-z]+$/.test(name) || !/^\d+$/.test(num))
    return false;

  return grades.every(val => {
    return /^[\u4e00-\u9fa5A-Za-z]+:\d+$/.test(val);
  });
}

function addStudent() {
  let ans = question(addMenu);
  while( !correctInput(ans) ){
    ans = question(addWrong);
  }
  util.storeStudent(ans);
  console.log(`学生${ans.slice(0,ans.indexOf(','))}的成绩被添加`);
}

function getReport() {
  let ans = question(searchMenu);
  while(!/^[\d+,]+$/.test(ans)){
    ans = question(searchWrong);
  }
  util.readStudent(ans);
}

function printErr() {
  console.log(`请输入正确的选择`);
}

module.exports = () => {
  let input = 0;
  do{
    input = getNumber(mainMenu);
    switch (input) {
      case 1 : addStudent();break;
      case 2 : getReport(); break;
      case 3 : break;
      default: printErr(); break;
    }
  }while(input!==3);
};