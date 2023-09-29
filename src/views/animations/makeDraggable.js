import { setListenersForActiveCells, setListenersForCell } from "../../controllers/listeners/forCells";
import { ActiveBoard, Board } from "../../models/board";
import { Knight, Point } from "../../models/figures";
import { FiguresPositions } from "../../models/figuresPositions";
import { start } from "../../models/knightMovesHandler";
import { Path } from "../../models/path";

export function makeDraggable(svg) {
    let selectedElement = false;
    let gag = document.createElement('gag');
    let last = gag;
    let cellIndex = 1;
    let parent;
    const cells = ActiveBoard.getBoard().getCells();

    function startDrag(e) {
        parent = svg.parentElement;
        selectedElement = svg;
        const rect = svg.getBoundingClientRect();
        const svgX = rect.x + parseInt(rect.width / 2);
        const svgY = rect.y + parseInt(rect.height / 2);
        const elements = document.elementsFromPoint(svgX, svgY);
        if (elements[0].getAttributeNames()[0] === 'd') {
            cellIndex = 2;
        }
    }

    function drag(e) {
        if (selectedElement) {
            const rect = svg.getBoundingClientRect();
            const cursorX = e.clientX;
            const cursorY = e.clientY;
            const elements = document.elementsFromPoint(cursorX, cursorY);
            const element = elements[cellIndex];
            let svgX = rect.x + parseInt(rect.width / 2);
            let svgY = rect.y + parseInt(rect.height / 2);

            setXY(svg, cursorX - svgX, cursorY - svgY);
            svgX = svg.getBoundingClientRect().x;
            svgY = svg.getBoundingClientRect().y;

            if (element.className === 'cell') {
                const mouseoverEvent = new Event('mouseover');
                element.dispatchEvent(mouseoverEvent);
            }

            if (last !== element) {
                const mouseleaveEvent = new Event('mouseleave');
                last.dispatchEvent(mouseleaveEvent);
                last = element;
            }
        }
    }

    function endDrag() {
        reset();

        if (last !== gag && last !== parent) {
            if (last.children.length === 0) {
                last.appendChild(svg);
                setParent(svg, last);
                setListenersForActiveCells(last);
                last.style.border = '1vh green solid';
                parent.style.border = '';
                if (parent.className === 'cell') {
                    setListenersForCell(parent);
                }
                let coordinates;
                cells.forEach(cells => {
                    cells.forEach(cell => {
                        if (cell.getNode() === last) {
                            coordinates = cell;
                        }
                    });
                });

                FiguresPositions[svg.className.baseVal] = coordinates;
            }
        }
    }

    function reset() {
        selectedElement = false;
        defaultXY(svg);
    }

    return { startDrag, drag, endDrag, last };
}



const getXY = (myElement) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    if (firstXForm.type == SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        const firstX = firstXForm.matrix.e;
        const firstY = firstXForm.matrix.f;
        return [firstX, firstY];
    }

}

export const setXY = (myElement, x, y) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(firstXForm.matrix.e + x, firstXForm.matrix.f + y);
}

export const defaultXY = (myElement) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(0, 0);
}

const setParent = (svg, parent) => {
    if (svg.className.baseVal === 'knight') {
        Knight.setParent(parent)
    }
    if (svg.className.baseVal === 'point') {
        Point.setParent(parent);
    }
}