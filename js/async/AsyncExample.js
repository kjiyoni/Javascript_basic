//자바 스크립트 비동기 처리 (23.06.30)

console.log("1 실행");
doTask();
console.log("2 실행");

function doTask() {
  setTimeout( () => {
    console.log("doTask 실행");
  } , 1000);  // 1초후에 실행되는 함수
}

console.log("3 실행");


