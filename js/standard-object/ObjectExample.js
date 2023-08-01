// 표준 내장 객체 - Object (23.06.27)

// let user = new Object(); 아래와 같은 코드
let user = {
  name : '김지연'
};

// 동적 객체 변환(오토박싱)
let str = 'xxxx'.charAt(0);

console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user));

// Object의 static 메소드 활용
// 깊은 복사
let user2 = {};
Object.assign(user2, user);
console.dir(user2);

let prototypee = Object.getPrototypeOf(user);
console.dir(prototypee);