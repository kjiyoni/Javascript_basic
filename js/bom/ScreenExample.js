// 브라우저 내장객체 - Screen (23.06.28)

function openWindowCenter(url, name, width, height) {
  const left = (screen.availWidth - width) / 2;
  const top = (screen.availHeight - width) / 2;
  const option = `left=${left}, top=${top}, width=${width}, height=${height}`;

  open(url, name, option);
}

openWindowCenter('../../hello.html', '', 300, 200);