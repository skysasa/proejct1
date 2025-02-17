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
let resetButton = document.getElementById("reset-button");
let historyList = document.getElementById("history-area");
let randomNumAnswer = document.getElementsByClassName("answer");
let resultAreaImg = document.getElementsByClassName("result-img");
let chanceArea = document.getElementById("chance-area");
let chances = 3;
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandom() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
  randomNumAnswer[0].textContent = ` 정답: ${computerNum}`;
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이 숫자를 입력해주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회: ${chances} 번`;

  history.push(userValue);

  historyList.textContent = `내가 추측한 숫자들: ${history.join(", ")}`;

  if (userValue < computerNum) {
    resultAreaImg[0].src =
      "https://img.freepik.com/free-photo/arrow-with-bright-neon-colors_23-2151204935.jpg"; // UP 이미지
    resultArea.textContent = "UP!!";
  } else if (userValue > computerNum) {
    resultAreaImg[0].src =
      "https://www.shutterstock.com/image-illustration/neon-down-arrow-sign-digital-600nw-2419597723.jpg"; // Down 이미지
    resultArea.textContent = "Down!!";
  } else {
    resultAreaImg[0].src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRPERD2ysMo55ArWpraGOUjOLcOQbqA0W5g-Aer57HUesdiMUhuctPNVWBqTSuHceahk&usqp=CAU";
    resultArea.textContent = "정답입니당.";
    gameOver = true;
    playButton.disabled = true;
  }

  if (chances === 0 && !gameOver) {
    gameOver = true;
    playButton.disabled = true;
    resultAreaImg[0].src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRfhv2RHQ7HCPGQdHCLPEuLP_g7sN9Mqvvg&s";
    resultArea.textContent = `Boo~ 정답은 ${computerNum}입니다. 다시 재도전!`;
  }
}

function reset() {
  // user input 창이 정리가 되고
  userInput.value = "";
  // 새로운 랜덤번호 생성
  pickRandom();
  gameOver = false;
  playButton.disabled = false;
  chances = 3;
  chanceArea.innerHTML = `남은 기회 ${chances}`;
  userValue = [];
  resultArea.textContent = "";
  history = [];
  historyList.innerHTML = "내가 추측한 숫자들:";
  resultAreaImg[0].src =
    "https://img.freepik.com/free-vector/cartoon-style-question-mark-symbol-background-why-who-query_1017-50433.jpg";
}

pickRandom();
