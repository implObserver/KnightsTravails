import { setListenersForCell } from "../../controllers/listeners/forCells";
import { getCellNode } from "./cell";

export const fillBoard = (board) => {
    const cells = board.getCells();
    const width = board.getSize()[0];
    const height = board.getSize()[1];
    const boardNode = document.querySelector('.board');
    let isBlack = true;
    for (let i = 0; i < width; i++) {
        isBlack = !isBlack
        for (let j = 0; j < height; j++) {
            const cell = cells[j][i];
            const node = getCellNode();
            setListenersForCell(node);
            cell.setNode(node);
            boardNode.appendChild(node);
            if (isBlack) {
                node.style.backgroundColor = '#d28b48';
            } else {
                node.style.backgroundColor = '#ffce9f';
            }
            isBlack = !isBlack;
        }
    }
}