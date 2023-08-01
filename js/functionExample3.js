// 함수 리터럴 표현식 (23.06.22)
// 익명함수 : function name(){}에서 name생략 가능, 한번쓰고 없어지는거니까 굳이 이름필요없어서
let myFunction = function (message) {
  console.log(message);
}

function doTask(fn) {
  // 콜백함수...
  fn();
}

// 함수 호출
myFunction('함수 리터럴 표현식입니다..');

doTask(myFunction);
