export const setBorder = (cell, color) => {
    cell.style.border = `1vh ${color} solid`;
}

export const resetBorder = (cell) => {
    cell.style.border = ``;
}

export const getCellNode = () => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}