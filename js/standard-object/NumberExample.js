// 표준 내장 객체 - Number (23.06.27)
let x = 88.3433434334.toFixed(2);
console.log(Number.MAX_VALUE);
console.log(x);

// x = new Number(x);
// console.log(x.toFixed(2));

let y = '123121';
// new 없이 직접 호출 시 형변환 함수로 동작한다..
let result = Number(y);
console.log(result);

