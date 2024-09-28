let boxes = document.querySelectorAll(".box");
let currentPlayer = "X";
let board = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box, index) => {
    box.addEventListener("click", () => handleBoxClick(index));
  });
};

const handleBoxClick = (index) => {
  if (!board[index]) {
    board[index] = currentPlayer;
    boxes[index].textContent = currentPlayer;
    if (checkWin()) {
      setTimeout(() => alert(`${currentPlayer} wins!`), 100);
      resetGame();
    } else if (board.every((cell) => cell)) {
      setTimeout(() => alert("It's a draw!"), 100);
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
};

const checkWin = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winConditions.some((condition) => {
    const [a, b, c] = condition;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
};

const resetGame = () => {
  board.fill(null);
  boxes.forEach((box) => (box.textContent = ""));
  currentPlayer = "X";
};

document.getElementById("reset-button").addEventListener("click", resetGame);

startGame();
