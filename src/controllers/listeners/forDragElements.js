import { ActiveFigure } from "../../models/currentAnimations";
import { Knight, Point } from "../../models/figures";
import { FiguresPositions } from "../../models/figuresPositions";
import { start } from "../../models/knightMovesHandler";
import { Path } from "../../models/path";
import { makeDraggable } from "../../views/animations/makeDraggable";
import { innerInterval, moveX, resetKnight, startMove } from "../../views/animations/move";
import { resetBorder } from "../../views/nodes/cell";
import { setListenersForCell } from "./forCells";


export const setListenersForDragSvg = (svg) => {
    const draggable = makeDraggable(svg);
    svg.addEventListener('mousedown', draggable.startDrag);
    svg.addEventListener('mousemove', draggable.drag);
    svg.addEventListener('mouseup', draggable.endDrag);
    svg.addEventListener('mousedown', e => {
        try {
            let path = Path.getPath();
            path.forEach(cell => {
                resetBorder(cell.getNode());
                cell.getNode().removeChild(cell.getNode().querySelector('.number'));
                setListenersForCell(cell.getNode());
            });
        } catch (error) {

        }
    });

    svg.addEventListener('mouseup', (e) => {
        try {
            start();

            Knight.setCell(FiguresPositions.knight);
            Point.setCell(FiguresPositions.point);
            let path = Path.getPath().slice();

            Point.getSvg().style.pointerEvents = 'none';
            Knight.getSvg().style.pointerEvents = 'none';
            startMove(path);


        } catch (error) {

        }
    })
}

export const setListenersForDragSvgForMibile = (svg) => {
    const draggable = makeDraggable(svg);
    svg.addEventListener('touchstart', draggable.startDrag);
    svg.addEventListener('touchmove', draggable.drag);
    svg.addEventListener('touchend', draggable.endDrag);
    svg.addEventListener('touchstart', e => {
        try {
            let path = Path.getPath();
            path.forEach(cell => {
                resetBorder(cell.getNode());
                cell.getNode().removeChild(cell.getNode().querySelector('.number'));
                setListenersForCell(cell.getNode());
            });
        } catch (error) {

        }
    });

    svg.addEventListener('touchend', e => {
        try {
            start();

            Knight.setCell(FiguresPositions.knight);
            Point.setCell(FiguresPositions.point);
            let path = Path.getPath().slice();

            Point.getSvg().style.pointerEvents = 'none';
            Knight.getSvg().style.pointerEvents = 'none';
            startMove(path);


        } catch (error) {

        }
    });
}