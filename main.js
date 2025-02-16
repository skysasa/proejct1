//랜덤 번호 지정
//유저가 번호를 입력한다 그리고 고 라는 버튼을 누른다.
//만약에 유저가 랜덤 번호를 맞추면, 맞췄습니다.
//랜덤 번호가 < 유저 번호 다운
//랜덤 번호가 > 유저 번호 업
// 리셋버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다 (button is disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandom() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP!!";
    console.log("UP");
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!!";
    console.log("Down");
  } else {
    resultArea.textContent = "맞추셨습니다.";
    console.log("맞추셨습니다.");
  }
}
pickRandom();
