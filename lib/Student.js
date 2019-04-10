module.exports = class Student{
  get sum() {
    return this._sum;
  }

  get average() {
    return this._average;
  }
  get name() {
    return this._name;
  }

  get num() {
    return this._num;
  }

  get grades() {
    return this._grades;
  }
  constructor(name, num, grades){
    this._name = name;
    this._num = num;
    this._grades = new Map(grades);
    this._sum = this._calcSum();
    this._average = this._calcAverage();
  }
  _calcAverage(){
    return this.sum/this.grades.size;
  }
  _calcSum(){
    let tmpArr = [...this.grades.values()].map(val=>parseInt(val));
    return tmpArr.reduce((t,a)=>t+a);
  }
};