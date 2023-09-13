import { Board } from "./models/board";
import { knightMovesHandler } from "./models/knightMovesHandler";
import { KnightMovesTree } from "./models/knightMovesTree";

let board = Board.getBoard();

let root = KnightMovesTree.getRoot();

let res = knightMovesHandler().getPath(board[0][0], board[0][0]);

res.forEach((element) => {
  console.log(element.getCoordinates());
});
