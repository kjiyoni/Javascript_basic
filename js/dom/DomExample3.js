// DOM 속성 제어하기 (23.06.28)
let aElement = document.querySelector('a');
let value = aElement.getAttribute('href');
console.log(value);
aElement.setAttribute('href', 'https://www.google.com'); // 속성변경

// 노드 생성 및 연결
// let liE = document.createElement('li');
// let text = document.createTextNode('졸지마');
// liE.appendChild(text);
// document.querySelector('ol').appendChild(liE);

// 위 코드를 한방에 쉽게 하는 방법
document.querySelector('ol').textContent = '졸지마';
document.querySelector('ol').innerText = '<b>졸지마</b>'; // 태그까지 이스케이프문자로 표시됨
document.querySelector('ol').innerHTML = '<b>졸지마</b>'; // 태그없이 태그적용되어 표시됨 -> 대부분 innerHTML을 많이 사용
console.log(document.querySelector('ol').innerText);

function show() {
  let div = '<div>댓글 내용입니다...</div>';
  let article = document.querySelector('article');
  article.innerHTML = div;
}