// Array 객체의 주요 메소드 (23.06.26)
let array = [2, 7, 1, 3, 9, 5, 4, 6, 8, 10];

let list = array.slice(2, 5);
console.dir(list);

let deleteList = array.splice(7, 1);
console.dir(deleteList);

// array.splice(1, 0, '김지연바보', '김지연천재');
// console.dir(array);

// 검색메소드 활용 - find (한개 반환) (콜백함수)

// 판별함수(기본원리) - 메모리 낭비로 잘 사용X
/*
function findCondition(num) {
  if(num === 7){
    return true;
  }
  return false;
} 
*/

/* 함수표현식
let findNum = array.find(function(num){
  return num === 7 ? true : false;  // 조건삼항연산자(if~else대신 사용하는 식) 활용
});
*/

// 람다식으로 코드 줄이기
let findNum = array.find(num => num === 7 ? true : false);

console.log(findNum);

// 검색메소드 활용 - filter (여러개)
// 배열에서 짝수목록만 검색
let findNums = array.filter(num => num % 2 === 0 ? true : false);
console.dir(findNums);

//배열 반복(순회) - forEach (메소드)
//각각 원소 값을 출력하고 싶을 때
array.forEach(num => {
  console.log(num);
});

//인덱스도 같이 출력하고 싶을 때
array.forEach((num, index) => {
  console.log(num, index);
});

// 배열 정렬 - sort 메소드
// array.sort();
array.sort((num1, num2) => {
  // return num1 - num2; // 오름차순
  return num2 - num1; // 내림차순
});
console.log(array);
