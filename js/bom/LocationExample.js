// 브라우저 내장객체 - Location (23.06.28)

console.log(location.href);

// let url = 'https://www.naver.com';
// location.href = url;

function go() {
  let url = 'https://www.naver.com';
  location.href = url;
  // location.assign(url);    // href, assign은 이동할때마다 히스토리에 남음
  // location.replace(url);   // replace는 이동할때마다 히스토리에 남지않음
  // location.reload();       // 새로고침 기능
}