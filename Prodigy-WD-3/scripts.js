const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset");
const newGameBtn = document.getElementById("new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");

let turnO = true; // Player O starts

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Add click event for each box
boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
      box.disabled = true;
      checkWinner();
    } else {
      box.innerText = "X";
      box.style.color = "black";
      turnO = true;
      box.disabled = true;
      checkWinner();
    }
  });
});

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.style.color = "red";
  });
}

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function showWinner(winner) {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

function checkWinner() {
  let hasWin = false;
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (
      pos1Val !== "" &&
      pos2Val !== "" &&
      pos3Val !== "" &&
      pos1Val === pos2Val &&
      pos2Val === pos3Val
    ) {
      showWinner(pos1Val);
      hasWin = true;
      return;
    }
  }
  if (!hasWin) {
    const allBoxesFilled = [...boxes].every((box) => box.innerText !== "");
    if (allBoxesFilled) {
      msgContainer.classList.remove("hide");
      msg.innerText = "Match Drawn";
    }
  }
}

function resetGame() {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
