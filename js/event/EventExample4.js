// 이벤트 처리를 객체화 (23.06.29)
class EventHandler{

  constructor(){
    // this = {};
    // return this;
  }

  // 이벤트 소스에 이벤트핸들러 등록
  eventRegist(){
    document.querySelector('button').addEventListener('click', event => {
      this.addStudent(event);
    });
  }

  // 학생 등록
  addStudent(event){
    alert('학생 등록 처리 완료');
  }

  // 학생 목록
}

// App.js 파일 따로 생성해서 아래 코드 실행시키는것이 좋음
let eventHandler = new EventHandler();
eventHandler.eventRegist();

