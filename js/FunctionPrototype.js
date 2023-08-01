//Function prototype 객체의 주요 메소드(23.06.27)

// 전역 함수 선언
function doTask() {
  // console.log("어떤 일을 합니다...");
  console.dir(this);
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

// 객체 생성
let person = {
  name : '김지연',
  age : 30,
  doStudy : function () {
    console.log("프로그래밍을 공부합니다..");
  }
}

// 함수 직접 호출
doTask();

// 함수 간접 호출(동적 호출)
// 내가 호출하는것이 아니라 Function이 가지고있는 메소드를 대신 호출
// doTask.call();
doTask.call(person);
// 사용 이유는 함수 내부에서의 this와 객체안에서의 this가 다르기 때문


// 특정객체에 동적 속성 추가 기능

function addAttribute(key, value) {
  this[key] = value; // .이 아닌 []로 접근 -> key에 특수문자가 들어올수도 있어서
  // 여기서 this는 특정 객체가 아닌 window 객체임
}

// window 객체에 속성 추가
addAttribute('name', '김지연');
addAttribute('age', '30');
console.dir(window);

// 사용자 객체에 속성 추가(간접 호출 - call함수)
let user = {};
addAttribute.call(user, 'name', '김지연'); // user에 집어넣는데 user는 파라메터가 있어 키와 벨류 넣어주기
addAttribute.call(user, 'age', '30');
console.dir(user);

// apply() 함수는 call함수와 동일한 기능이나 전달인자를 배열로 전달
addAttribute.apply(user, ['name', '김지연']);
// addAttribute.apply(user, ['age', '30']);
console.dir(user);

// bind() 함수는 addAttribute()함수를 user에 바인딩하여 함수를 반환
let addProperty = addAttribute.bind(user);
addProperty('name', '김지연');
addProperty('age', '30');
console.dir(user);

let array = [6, 2, 9, 1];
for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const value = array[key];
    console.log(value);
  }
}