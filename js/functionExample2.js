// 중첩(Helper) 함수 정의 (23.06.22)

function main() {
  console.log("주기능입니다...");

  //중첩함수
  function helper(num) { 
    return Math.pow(num, 2);
  }

  let x = 10;
  let result = helper(x);
  console.log(result);

}

main();
