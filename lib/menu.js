const chalk = require("chalk");
let mainMenu = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择(1～3)：`;
let addMenu = `请输入学生信息(格式：${chalk.green(`姓名, 学号, 学科: 成绩, ...`)})，按回车提交：`;
let addWrong = `${chalk.redBright(`请按正确的格式输入: `)}(格式：${chalk.green(`姓名, 学号, 学科: 成绩, ...`)})：`;
let searchMenu = `请输入要打印的学生的学号(格式：${chalk.green(`学号, 学号,...`)})，按回车提交：`;
let searchWrong = `${chalk.redBright(`请按正确的格式输入: `)}(格式：${chalk.green(`学号, 学号,...`)})，按回车提交：`;

module.exports = {
  mainMenu,
  addMenu,
  addWrong,
  searchMenu,
  searchWrong
};
