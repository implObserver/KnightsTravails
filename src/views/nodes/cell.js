export const setBorder = (cell, color) => {
    cell.style.border = `min(1vh, 1vw) ${color} solid`;
}

export const resetBorder = (cell) => {
    cell.style.border = ``;
}

export const getCellNode = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}