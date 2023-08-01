// DOM 동적 스타일 적용하기 (23.06.28)
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.style.color = 'white';
//   element.style['background-color'] = 'blue';
// });

// className - 전체를 덮어버림
// let list = document.querySelectorAll('h1');
// list.forEach(element => {
//   element.className = 'head';
// });

// 위 코드보다 더 유연한 방법 - classList(기존에 있던 것을 덮지않고 유지하면서 기존에 있던것에서 추가되는것)
let list = document.querySelectorAll('h1');
list.forEach(element => {
  // element.classList.add('head');    // 기존 리스트에 추가
  // element.classList.remove('head'); // 기존 리스트에서 제거
  // element.classList.toggle('head'); // 토글 기능
  
  setInterval(() => {
    // element.classList.toggle('head');
  } , 1000); // 초단위로 토글기능 하고싶을 때

});