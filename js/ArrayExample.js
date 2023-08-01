// let array = new Array();
let array = []; // 배열 리터럴 표현식
array.push(10); // 배열의 끝에 원소 추가 메소드
array.push('김지연바보');
array.push(new Student(10, '김지연', 50, 40, 30));
array.push(new Student(11, '이지연', 80, 20, 30));
array.unshift(new Student(12, '삼지연', 90, 70, 20));

for (const value of array) {
  console.log(value);
}

console.log(array[0]);
// console.dir(array);
console.log(array.length);

// delete array[0]; // 인덱스로 삭제
array.shift(); // 메소드로 삭제(맨 앞 원소)
// array.pop(); 맨 끝 원소 삭제
console.dir(array);
