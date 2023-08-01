// 여러 학생 목록 관리 객체
function StudentRepository(){
  // this = {};
  this.students = new Array();
  // this.students = [];  위와 동일한 의미
  // return this;
}

StudentRepository.prototype.addStudents = function(student){
  this.students.push(student);
}

StudentRepository.prototype.getStudents = function(){
  return this.students;
}

// 학번으로 학생 검색 (람다식 코드)
StudentRepository.prototype.findBySsn = function(ssn){
  return this.students.find(student => student.ssn === ssn ? true : false); 
  // js에서 조건삼항연산자보다 더 간략한 코드(위 코드와 똑같음)
  // return this.students.find(student => student.ssn === ssn || false);  // || : or연산자
}

// 이름으로 학생 검색 (람다식 코드)
StudentRepository.prototype.findByName = function(name){
  return this.students.filter(student => student.name === name ? true : false);
}

// 학번으로 학생 삭제  
StudentRepository.prototypes.removeBySsn = function(ssn){
  let deleted = false;

   this.students.forEach((student, index) => {
    if(student.ssn === ssn){
      this.students.splice(index, 1);
      deleted = true;
    }
   });
   return deleted;
}

// 평균 범위로 검색
StudentRepository.prototype.findByRange = function(start, end){
  let list = [];
  this.students.forEach(student => {
    if(student.getAverage() >= start && student.getAverage() <= end){
      list.push(student);
    }
  });
  return list;
}

// ??정렬하여 전체 검색 (기능 추가)
StudentRepository.prototypes.findAllbySort = function (fn) {
return this.students.sort(fn);
}  

// 임시 테스트
let studentRepository = new StudentRepository();
studentRepository.addStudents(new Student(10, '김지연', 100, 80, 50));
studentRepository.addStudents(new Student(11, '일지연', 90, 80, 50));
studentRepository.addStudents(new Student(12, '이지연', 55, 70, 10));
studentRepository.addStudents(new Student(13, '삼지연', 90, 80, 60));
studentRepository.addStudents(new Student(14, '사지연', 40, 70, 90));
studentRepository.addStudents(new Student(15, '김지연', 60, 20, 75));

console.log('===전체 학생 목록 조회===');
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


// 평균 내림차순으로 정렬하여 목록 보여주고 싶을때...
let sortedList = studentRepository.findAllbySort((student1, student2) => student2.getAverage() - student1.getAverage());
sortedList.forEach(student => {
  console.log(student.toString())
});


