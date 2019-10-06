const inquirer = require('inquirer');
function question(res){
  inquirer.prompt([{
    name : 'name',
    type : 'input',
    message : 'got'
  }]).then(res);
}
function res(ans) {
  console.log(ans);
  question(res);
}

question(res);
