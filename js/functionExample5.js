// 표준 내장 함수 (23.06.23)
// const yn = confirm('너 바보냐?');
// if(yn){
//   console.log('바보군..');
// } else{
//   console.log('아니군..');
// }

// // 표준 내장함수 - setTimeout
// setTimeout(() => {
//   console.log('1초후 실행되었습니다..');
// }, 1000);

// let second = 1;
// setInterval(() => {
//  console.log(`${second}초`);
//  second++; 
// }, 1000);

// // 표준 내장함수 - setInterval
// let second = 1;
// let timer = setInterval(() => {
// document.write(`<h3>${second}초</h3>`);
//  second++; 
// }, 1000);

// // clearTimeout - 10초후 타이머 제거
// setTimeout(() => {
//   clearTimeout(timer);
// }, 10000);

// 표준 내장함수 - parseInt
let money = '100원';
money = parseInt(money);
console.log(money + 100);

// 표준 내장함수 - isNaN
let result = 1000/'김지연';
if(isNaN(result)){
  console.log('헐~~~');
}