// 표준 내장 객체 - String (23.06.27)
let ssn = prompt('주민번호를 입력하세요.');
// 680313-1234567
if(ssn){

  const c = ssn.charAt(ssn.indexOf('-') + 1);
  switch (c) {
    case '1': 
    case '3': alert('남자'); break;
    case '2':
    case '4': alert('여자'); break;
    default: alert('외국인'); break; 
  }
}else{
  alert('바르게 입력해주세요');
}


