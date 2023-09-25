export const getArrowNode = (name) => {
    const arrow = document.querySelector('.arrow-template').cloneNode(true);
    arrow.classList.add(`arrow`);
    arrow.classList.add(`arrow-${name}`);
    arrow.classList.remove('arrow-template');
    return arrow;
}