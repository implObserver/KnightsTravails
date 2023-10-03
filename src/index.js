import './views/css/main.css'
import { ActiveBoard, Board } from "./models/board";
import { knightMovesHandler } from "./models/knightMovesHandler";
import { KnightMovesGraph } from "./models/knightMovesGraph";
import { fillBoard } from './views/nodes/board';
import { makeDraggable } from './views/animations/makeDraggable';
import { setListenersForDragSvg } from './controllers/listeners/forDragElements';
import { FiguresPositions } from './models/figuresPositions';
import { setListenersForTravails } from './controllers/listeners/forTravails';
import { Animations } from './views/animations/animations';
import { Arrow } from './views/animations/arrows';
import { Knight } from './models/figures';
import { currentDemo, startLern } from './models/lernPreset';
import { setListenersForDemo } from './controllers/listeners/forLernDemo';

KnightMovesGraph().buildGraph(ActiveBoard.getBoard());

fillBoard(ActiveBoard.getBoard());

setListenersForTravails();

let isLern = JSON.parse(localStorage.getItem('isLern'));

if (isLern !== 'yes') {
    let demo = startLern();
    currentDemo.setdemo(demo);
}
let demo = startLern();
    currentDemo.setdemo(demo);