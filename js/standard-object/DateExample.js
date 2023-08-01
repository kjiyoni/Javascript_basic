// 표준 내장 객체 - Date (23.06.27)
let today = new Date();
console.log(today.toString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());

//  1970-01-01 00:00:00 기준으로 현재까지 지나온 시간 밀리초 반환
console.log(today.getTime());

today = Date.now();
today = new Date().setTime(today);
console.log(today.toLocaleString());