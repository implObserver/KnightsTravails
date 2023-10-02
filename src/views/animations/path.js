import { setListenerForPathCells } from "../../controllers/listeners/forCells";
import { Path } from "../../models/path";
import { setBorder } from "../nodes/cell";
import { SmoothAnimations } from "./animations";

export const viewPath = () => {
    const path = Path.getPath();
    try {
        for (let i = 0; i < path.length; i++) {

            let cell = path[i];
            let span = setUpSpan(i + 1, 'number');
            if (cell.getNode().querySelector('.point') === null) {
                cell.getNode().appendChild(span);
            }
            SmoothAnimations.SmoothVisibility.view(span, 0, 1, 500, 'forwards');
            setBorder(cell.getNode(), 'blue');
            setListenerForPathCells(cell.getNode());
        }
    } catch (error) {
       
    }
}

const addClasses = (node, ...classes) => {
    for (let curClass of classes) {
        node.classList.add(curClass);
    }
}

const setUpSpan = (text, className = '') => {
    let span = createNode('span', className);
    span.textContent = text;
    return span;
}

const createNode = (nodeName, ...className) => {
    let node = document.createElement(nodeName);
    addClasses(node, ...className);
    return node;
}