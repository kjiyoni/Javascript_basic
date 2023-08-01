// for in문 (23.06.22)
// 배열 리터럴(선언, 생성, 초기화 동시에)
let array = [3, 9, 25, 28, 7, 1];
for (let i = 0; i < array.length; i++) {
  const num = array [i];
  console.log(num);
}

// 확장 for문 = for in문(값이 아니라 요소의 순서(index)를 리턴해줌)
for (let i in array) {
  // console.log(i); // 순서를 리턴
  // console.log(array[i]); // 값을 리턴
  console.log(i, array[i]); // 두가지 동시에 리턴
}

// for of문 (자바의 향상 for문과 동일)
for (let num of array
  ) {
  console.log(num);
}