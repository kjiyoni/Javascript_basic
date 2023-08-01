// if문 (23.06.22)

// 값을 입력받는 함수(리턴타입->문자열), 뒤에 인자 하나 넣으면 기본값설정(플레이스홀더)
let score = prompt('점수를 입력하세요', 0); 
console.log(typeof score);
// let score = 88;

if(score >= 60){
  console.log('합격');
}else{
  console.log('불합격');
}

if(score >= 90){
  console.log('수');
}else if(score >= 80){
  console.log('우');
}else if(score >= 70){
  console.log('미');
}else if(score >= 60){
  console.log('양');
}else{
  console.log('가');
}

