// 학생객체 생성을 위한 틀(클래스) (23.06.27)
// export
class Student {

  constructor(ssn, name, korean, english, math) {
    // this = {};
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }

  // 정적(static) 속성 및 메소드 추가
  static schoolName = "EZEN 초등학교";
  static showSchoolName() {
    console.log(Student.schoolName);
  }

  // 생성자 함수(객체)의 메소드를 Student의 프로토타입 객체에 할당
  getSum() {
    return this.korean + this.english + this.math;
  }

  getAverage() {
    return this.getSum() / 3;
  }

  // Object 프로토타입객체의 toString() 오버라이딩
  toString() {
    return `${this.ssn} \t ${this.name} \t ${this.korean} \t ${this.english} \t ${this.math} \t ${this.getSum()} \t ${this.getAverage()}`;
  }
}

let student = new Student(10, '김지연', 90, 80, 50);
console.log(student.toString());

console.dir(Student);


// 프로토타입 상속 체인 검증
console.log('name' in student);
console.log('valueOf' in student);

// Object 프로토타입객체의 메소드 재사용(상속) 
console.log(student.hasOwnProperty('name'));
console.log(student.hasOwnProperty('valueOf'));
console.log(student.toString());

Student.showSchoolName();


export {Student};