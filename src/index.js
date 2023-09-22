import './views/css/main.css'
import { ActiveBoard, Board } from "./models/board";
import { knightMovesHandler } from "./models/knightMovesHandler";
import { KnightMovesGraph } from "./models/knightMovesGraph";
import { fillBoard } from './views/nodes/board';
import { makeDraggable } from './views/animations/makeDraggable';
import { setListenersForDragSvg } from './controllers/listeners/forDragElements';
import { FiguresPositions } from './models/figuresPositions';
import { setListenersForTravails } from './controllers/listeners/forTravails';

let board = Board();
board.createCells();
ActiveBoard.setBoard(board);
let cells = board.getCells();
KnightMovesGraph().buildGraph(board);

fillBoard(board);

const knightSvg = document.querySelector('.knight');
const pointSvg = document.querySelector('.point');
setListenersForDragSvg(knightSvg);
setListenersForDragSvg(pointSvg);
setListenersForTravails();