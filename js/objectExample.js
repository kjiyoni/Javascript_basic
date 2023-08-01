// 강아지 객체 즉시 생성(틀 없이) (23.06.23)

// 객체 리터럴 표현식
let dog = {
  name : '두유',
  age : 12,
  kind : '말티즈',
  eat : function () {
    console.log(this.name + '가 무척 잘 먹습니다...');
  },
  toString : function () {  // 오버라이딩
    return '헐';
  }
};

// 객체의 속성 검색
console.log(dog.name);
console.log(dog['name']); 
// 대괄호 안에 키를 주어 접근가능
// 키값의 특수문자가 들어가면 .으로 접근할 수 없으므로 대괄호 사용
console.log(dog.age);
console.log(dog.kind);
dog.eat();

// 객체의 속성 변경
dog.name = '두부';
console.log(dog.name);

// 속성 삭제(제거)
delete dog.age;
console.log(dog.age);

// 기능 추가(동적 추가)
dog.walk = function(){
  console.log("잘 걷습니다...");
}

dog.walk();

// in 연산자
if('age' in dog){
  console.log(dog.age);
}else{
  console.log('age 속성이 없습니다...');
}

// for ~ in문
for (const key in dog) {
  console.log(key, dog[key]);
}

// for ~ of문
let array = [5, 3, 2, 7];
for (const value of array) {
  console.log(value);
}

console.clear(); // 콘솔 삭제 기능
console.log(dog);
console.dir(dog); // dir : 객체 타입을 상세하게 보고싶을 때 (디버깅 시 사용하기 좋은 메소드)
