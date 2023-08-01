// 클래스 (23.06.27)
class Person{

// 정적 속성(static)
static commonAttribute = "공통속성";
// 정적 메소드
static commonMethod(){
  console.log("공통 메소드입니다..");
}

  constructor(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
  }
  // setter/getter
  get name(){
    return this._name; 
    // name은 메소드가 아니고 getter임, name을 그냥 부르면 재귀현상(무한루프) 도므로 ._name으로 써주어야함
  }

  get age(){
    if(age < 10 || age > 100){
      throw new Error('나이는 10 ~ 100 사이로 입력해주세요.');
    }
    return this._age;
  }

  set name(name){
    // 데이터 유효성 검증
    if(name === undefined)
      throw new Error('이름은 반드시 입력하여야 합니다.');
    this._name = name;  
  }

  set age(age){
    this._age = age;  
  }

  showInfo(){
    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
  }
}

let person = new Person('김지연', 30);
person.name = '강지연';
console.log(person.name);
console.log(person.age);
person.showInfo();

try{
  // person.name = undefined;
  person.age = 900;
} catch (e){
  alert(e.message);
}
person.showInfo();

console.log(Person.commonAttribute);
Person.commonMethod();
