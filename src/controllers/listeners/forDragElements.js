import { start } from "../../models/knightMovesHandler";
import { Path } from "../../models/path";
import { makeDraggable } from "../../views/animations/makeDraggable";
import { setListenersForCell } from "./forCells";

export const setListenersForDragSvg = (svg) => {
    const draggable = makeDraggable(svg);
    svg.addEventListener('mousedown', draggable.startDrag);
    svg.addEventListener('mousemove', draggable.drag);
    svg.addEventListener('mouseup', draggable.endDrag);
    svg.addEventListener('mouseup', e => {
        try {
            let path = Path.getPath();
            path.forEach(cell => {
                cell.getNode().style.border = '';
                setListenersForCell(cell.getNode());
            });
        } catch (error) {

        }
        try {
            start();
        } catch {

        }
    });
    svg.addEventListener('mouseover', draggable.endDrag);
    svg.addEventListener('mouseleave', draggable.endDrag);
}