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
import { startLern } from './models/lernPreset';

KnightMovesGraph().buildGraph(ActiveBoard.getBoard());

fillBoard(ActiveBoard.getBoard());

setListenersForTravails();

startLern();