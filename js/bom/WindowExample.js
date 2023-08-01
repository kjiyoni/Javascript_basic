// BOM의 구조 (23.06.27)
console.dir(window);

let myWindow= open('../../hello.html', '내창');
if(myWindow !== null){
  alert('팝업을 해제해주세요');
}
// myWindow.close();