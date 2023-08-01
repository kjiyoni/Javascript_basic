// 생성자 함수를 이용한 객체 틀 (23.06.23)
function Dog (name, age, kind){
  // this = {}; this라는 빈객체 생성
  // 속성 추가
  this.name = name;
  this.age = age;
  this.kind = kind;

  // 기능(메소드) 추가
  this.cry = function(){
    console.log(`${this.name} 강아지가 웁니다`);
  }
  // return this; this 객체 반환 (실행엔진이 자동으로 해줌)
}

let dog = new Dog('두유', '12', '말티즈');
console.log(dog);
dog.cry();

let dog2 = new Dog('꼬미', '8', '스트릿'); // new떼고 호출하면 this객체가 생성되지않아 undefined 리턴됨
console.log(dog2);
dog2.cry();
// 즉, 자바스크립트에서 new는 생성자 함수에서 this객체를 생성해 반환해주라는 뜻

// 자바스크립트 표준 객체(생성자 함수)를 사용
let string = new String('김지연입니다...'); // 미리 만들어져 있는 생성자 함수
const count = string.length;
console.log(count);

let ssn = "950313-1234567"; // 묵시적 생성
let ch = ssn.charAt(7);
switch (ch) {
  case '1' : console.log('남자'); break;
  case '2' : console.log('여자'); break;
}

// 자바스크립트 표준 내장객체
let number = new Number(10);
console.log(number);
let bool = new Boolean(true);
console.log(bool);
let today = new Date();
console.log(today.toLocaleString());

// 자바의 List, Set, Queue, Stack 기능이 들어있는 배열
let array = new Array();


