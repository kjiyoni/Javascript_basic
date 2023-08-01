// 콜백 함수는 왜 써야 하나? (23.06.23)
// ex. 사칙연산 메소드를 하나하나 다 만들지말고(코드가 유사하므로) 한방에 할수있는방법 고민..

function calculate(fn, a, b) {                //()에 fn(함수)를 전달받아서 처리하고싶은 것임
  // 데이터 처리
  return fn(a, b);
}

let num1 = 300, num2 = 500;

let result = calculate(function (x, y){      // 콜백함수가 결정하는것이 아닌 호출하는 쪽에서 데이터처리 방법을 결정함
  return x + y;
}, num1, num2);
console.log(result);

// 화살표 함수(람다식)
result = calculate((x, y) => x + y , num1, num2);  // 화살표함수(람다식) 인자로 줄때 ;세미콜론 찍으면 안됨
console.log(result);

result = calculate(function(x, y){
  return x * y;
}, num1, num2);
console.log(result);

// 즉시 호출
(function doTask() {
  console.log("나는 즉시 호출됩니다....");
}) ();