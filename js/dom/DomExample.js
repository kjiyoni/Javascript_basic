// DOM 접근 방법 (23.06.28)
console.dir(document.firstChild);
console.dir(document.firstElementChild); // html접근시 firstElementChild로 접근
console.dir(document.firstElementChild.constructor);

// #1. 돔트리 계층 구조로 검색
// Node의 공통 속성 3개 - nodeType, nodeName, nodeValue
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);
// DOM트리 구조상 요소와 텍스트값은 부모와 자식관계에 있음, 요소자체는 값이 없는 것임

// body 요소 접근 방법(계층구조로 검색)
console.log(document.firstElementChild.lastElementChild.nodeName);

//#2. get메소드로 특정 요소 접근
let pArray = document.getElementsByTagName('p');
// 리턴타입은 배열이 아니고 유사배열입니다...(배열에서 사용하는 메소드를 사용못함, 그러나 for in, for of 확장for문은 사용가능)
console.log(pArray.constructor);
// for of문 사용
for (const element of pArray) {
  console.log(element.nodeName);
}

//Id속성으로 찾는 방법
let pElement = document.getElementById('myP');
console.dir(pElement);

// 클래스이름으로 찾는방법 - 유사배열로 리턴됨
let htmlCollection = document.getElementsByClassName('container');
console.dir(htmlCollection);

console.clear();

// #3. CSS 선택자를 이용한 검색
// querySelector는 리턴타입이 NodeList
// console.dir(document.querySelector('p'));       // 선택자의 첫번째 것만 얻어옴(1개)
let nodeList = document.querySelectorAll('p');     // 여러개 - nodeList 객체 제공 - forEach 제공
nodeList.forEach((element) => {
  console.log(element.nodeName);
});

let pEl = document.querySelector('#myP'); // id선택자 접근
console.log(pEl.nodeName);

// 원하는 값을 가지고오고 싶을때
let textNode = pEl.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);
// alert(textNode.nodeValue);

//클래스 선택자 접근
console.log(document.querySelector('.container').firstChild.nodeValue);
// 가상 클래스 선택자 접근
console.log(document.querySelector('li:first-child').firstChild.data);
console.log(document.querySelector('li:last-child').firstChild.data);
let list = document.querySelectorAll('li:nth-child(2n+1)');
list.forEach((element) => {
  console.log(element.firstChild.nodeValue);
});