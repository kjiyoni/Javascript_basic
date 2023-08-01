// 템플릿 스트링
// 문자나 문자열 처리할때 `` 사용 가능
let name = '김지연';
let message = `템플릿 스트링 ${name}`;   //${변수이름} : 참조하는 것, ``에서 사용하면 문자열 연결하기 쉬움
console.log(message);

// typeof 연산자 : 타입 알고싶을 때
let age = 10;
console.log(typeof age);
console.log(typeof message);

// 특수 숫자리터럴(키워드)
console.log(10/0);
console.log('나는 김지연입니다'/10);

// 논리형
let flag = false;
let flag2 = 0; // 0은 true로 인식, 양수 음수는 모두 false로 인식함, 문자열은 값이 있으면 무조건 true
if(flag2){
  console.log('참입니다');
}

// 자바스크립트는 자동형변환이 엄청 많이 발생한다..
// 자바스크립트는 문자열과 숫자열중에 숫자열에 우선순위가 있음
console.log(1000 * '10');  // 문자열 10이 숫자로 자동형변환 되어 계산됨
console.log('1000' * '10');

