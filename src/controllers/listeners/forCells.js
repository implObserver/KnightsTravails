import { resetBorder, setBorder } from "../../views/nodes/cell"

export const setListenersForCell = (cell) => {
    const mouseover = cell.addEventListener('mouseover', e => {
        setBorder(cell, 'red');
    })

    const mouseleave = cell.addEventListener('mouseleave', e => {
        resetBorder(cell);
    })
}

export const setListenersForActiveCells = (cell) => {
    const mouseover = cell.addEventListener('mouseover', e => {
        setBorder(cell, 'green');
    })

    const mouseleave = cell.addEventListener('mouseleave', e => {
        setBorder(cell, 'green');
    })
}

export const setListenerForPathCells = (cell) => {
    const mouseover = cell.addEventListener('mouseover', e => {
        setBorder(cell, 'blue');
    })

    const mouseleave = cell.addEventListener('mouseleave', e => {
        setBorder(cell, 'blue');
    })
}