import './views/css/main.css'
import { Board } from "./models/board";
import { knightMovesHandler } from "./models/knightMovesHandler";
import { KnightMovesGraph } from "./models/knightMovesGraph";
import { fillBoard } from './views/nodes/board';
import { makeDraggable } from './views/animations/makeDraggable';

const knightSvg = document.querySelector('.knight');
const pointSvg = document.querySelector('.point');
makeDraggable(knightSvg);
makeDraggable(pointSvg);
let board = Board();
board.createCells();
let cells = board.getCells();
KnightMovesGraph().buildGraph(board);
let res = knightMovesHandler().getPath(cells[0][0], cells[4][4]);

res.forEach((element) => {
  console.log(element.getCoordinates());
});

fillBoard(board);