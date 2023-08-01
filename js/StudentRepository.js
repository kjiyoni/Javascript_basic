// 여러 학생 목록 관리 객체
function StudentRepository(){
  // this = {};
  this.students = new Array();
  // this.students = [];  위와 동일한 의미

  this.addStudents = function(student){
    this.students.push(student);
  }

  this.getStudents = function(){
    return this.students;
  }

  // 학번으로 학생 검색
  this.findBySsn = function(ssn){
    for (const student of this.students) {
      if(student.ssn === ssn){
        return student;
      }
    }
    return undefined;
  }

  // 이름으로 학생 검색
  this.findByName = function(name){
    let list = []; // 배열로 리턴해주어야 하므로 빈배열 생성
    for (const student of this.students) {
      if(student.name === name)
       list.push(student);
    }
    return list;
  }

  // 학번으로 학생 삭제  
   this.removeBySsn = function(ssn){
     for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].ssn === ssn) {
        // delete this.students[i]; 위험한 삭제 방법
        this.students.splice(i, 1);
        return true; // 학생 삭제
      }
     }
     return false; // 학번에 해당하는 학생이 없어 삭제 실패
  }

  // 평균 범위로 검색
   this.findByRange = function(start, end){
    let list = [];
    for (const student of this.students) {
      if (student.getAverage() >= start && student.getAverage() <= end) {
        list.push(student);
      }
    }
    return list;
  }

  // return this;
}

// 임시 테스트
let studentRepository = new StudentRepository();
studentRepository.addStudents(new Student(10, '김지연', 100, 80, 50));
studentRepository.addStudents(new Student(11, '일지연', 90, 80, 50));
studentRepository.addStudents(new Student(12, '이지연', 55, 70, 10));
studentRepository.addStudents(new Student(13, '삼지연', 90, 80, 60));
studentRepository.addStudents(new Student(14, '사지연', 40, 70, 90));
studentRepository.addStudents(new Student(15, '김지연', 60, 20, 75));

console.log('전체 학생 목록 조회');
let allList = studentRepository.getStudents();
for (const student of allList) {
  console.log(student.toString());
}

console.log('학번으로 학생 검색');
let findStudent = studentRepository.findBySsn(10);
if(findStudent !== undefined){
  console.log(findStudent);
}else{
  console.log('해당하는 학번의 학생이 없습니다..');
}

console.log('이름으로 학생 검색');
let findStudents = studentRepository.findByName('김지연');
if(findStudents.length !== 0){
  for (const student of findStudents) {
    console.log(student);
  } 
} else {
    console.log('해당하는 이름의 학생이 없습니다..');
}

console.log('학번으로 학생 삭제');
let removed = studentRepository.removeBySsn(12);
if(removed){
  console.log('삭제 완료');
} else {
  console.log('삭제하고자 하는 학생이 존재하지 않습니다.');
}

console.log(studentRepository.getStudents());

// 평균 범위로 검색 테스트
let rangeList = studentRepository.findByRange(80, 90);
for (const student of rangeList) {
  console.log(student.toString());
}

