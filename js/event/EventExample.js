// 이벤트 처리 (23.06.28)
// function eventListener() {
//   console.log('왜 눌렀냐????????');
// }

// 이벤트 소스에 이벤트 리스너 등록

// 클릭 이벤트 효과
// document.querySelector('button').addEventListener('click', eventListener);
document.querySelector('button').addEventListener('click', (event) => {
  console.dir(event);
  if(event.ctrlKey){
    event.target.style.backgroundColor = 'blue';
  console.log('왜 눌렀냐????????')
  }
});

// 롤오버 효과
document.querySelector('button').addEventListener('mouseenter', event => {
  event.target.style.backgroundColor = 'green';
});
// 자바스크립트에서 이벤트처리 함수안에서 this는 이벤트 taget을 말함(화살표함수에서 this사용못함)

document.querySelector('button').addEventListener('mouseleave', event => {
  event.target.style.backgroundColor = '';  // 빈문자열 원래색깔
});

function serverSend(message) {
  console.log(message + '를 서버에 전송합니다.');
}

let input = document.querySelector('[type=text]');
input.addEventListener('keypress', event => {
  // console.log(input.value); //값을 읽어올 때
  if(event.keyCode === 13){   // 13번 : 엔터값
    const message = input.value;
    serverSend(message);
    input.value = '';
  }

});

// 폼태그 - html에서 name속성을 부여하면 
// console.dir(document.frm.search);
document.frm.search.addEventListener('change', event => {
  console.dir(event.target.options);
  let options = event.target.options;
  let selectedValue = options[options.selectedIndex].value;
  console.log(selectedValue);
})

//또 다른 방법(DOM을 이용해 가져와서 Selected속성을 이용해서 값을 가져오는 방법)
document.frm.search.addEventListener('change', event => {
  let options = document.querySelectorAll('option');
  options.forEach(function (element) {
    if(element.selected){
      console.log(element.value);
    }
  });
});