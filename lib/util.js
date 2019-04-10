const Student = require("./Student.js");
const fs = require('fs');

function storeStudent(ans){
  fs.writeFileSync("./store.dat",ans+"\n",{flag:'a'});
}

function readStudent(numStr){
  let allStu = getAllStudent(numStr);
  if(allStu.length === 0){
    console.log(`未查询到任何相关成绩，请检查输入`);
    return false;
  }
  console.log(`成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================`);
  let sumArr = [];
  for(let student of allStu){
    sumArr.push(student.sum);
    console.log(`${student.name}|${student.grades.get('math')}|${student.grades.get('chinese')}|${student.grades.get('english')}|${student.grades.get('code')}|${student.average}|${student.sum}`);
  }

  let allAverage = sumArr.reduce((a,b)=>a+b)/sumArr.length;
  let sortedSumArr = sumArr.sort((a,b)=>a-b);
  let allMiddle = 0;
  let middleIndex = Math.floor(sumArr.length/2) -1;
  if(sumArr.length %2 === 0)
    allMiddle = (sortedSumArr[middleIndex]+sortedSumArr[middleIndex + 1])/2;
  else
    allMiddle = sortedSumArr[middleIndex] + 0;
  console.log(`========================
全班总分平均数：${allAverage}
全班总分中位数：${allMiddle}`);
}
function getAllStudent(numStr){
  let stuNums = numStr.split(',');
  let allStr = fs.readFileSync('./store.dat').toString('utf8');
  let ansArr = allStr.trim().split('\n');

  return ansArr.map((stuStr) => {
    let [name, num, ...grades] = stuStr.split(',');
    grades = grades.map(val => val.split(':'));
    return new Student(name, num, grades);
  }).filter(val => stuNums.includes(val.num));
}

module.exports = {
  storeStudent,
  readStudent
};