// 1️⃣ 랜덤번호 지정
// - 게임을 시작하기에 앞서, 랜덤번호, 정답이 뭔지 지정해야 한다.
// 2️⃣ 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누른다.
// 3️⃣ 경우의 수 3가지
// - 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// - 랜덤번호 < 유저번호 → Down!
// - 랜덤번호 > 유저번호 → Up!
// 4️⃣ Reset 버튼을 누르면 게임이 리셋된다.
// 5️⃣ 5번의 기회를 다 쓰면 게임이 끝난다. (더 이상 추측 불가, 버튼이 disable)
// 6️⃣ 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 7️⃣ 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click",play)

function pickRandomNum(){
	computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "Up!!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!!"
    }else{
        resultArea.textContent = "정답!!!"
    }
}

pickRandomNum();