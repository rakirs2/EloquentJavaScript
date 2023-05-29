console.log("8 by 6 chessboard")

let rows = 6;
let columns = 8;

let board = "";

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < columns; x++) {
    if ((x + y) % 2 == 1) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);