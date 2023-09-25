import { getArrowNode } from "../nodes/arrow";
import { Animations, SmoothAnimations } from "./animations";
import { setXY } from "./makeDraggable";

export const Arrow = (svg, name) => {
    let interval;
    const arrow = getArrowNode(name);
    const rectSvg = svg.getBoundingClientRect();

    const startAnimation = () => {
        setTimeout(() => {
            SmoothAnimations.SmoothVisibility.open(arrow, 0, 1, 500, 'forwards');
        }, 1000);
        const rectArrow = arrow.getBoundingClientRect();
        interval = setInterval(() => {
            Animations.transform.x(arrow, `${rectArrow.x}px`, `${rectSvg.x + rectSvg.width / 2}px`, 400, 'forwards');
            Animations.transform.y(arrow, `${rectArrow.y}px`, `${rectSvg.y}px`, 400, 'forwards').finished.then(() => {
                Animations.transform.x(arrow, `${rectArrow.x}px`, `${rectSvg.x + rectSvg.width / 2}px`, 400, 'forwards').reverse();
                Animations.transform.y(arrow, `${rectArrow.y}px`, `${rectSvg.y}px`, 400, 'forwards').reverse();
            })
        }, 790);
    }

    const stopAnimation = () => {
        clearInterval(interval);
    }

    const viewArrow = () => {
        const panel = document.querySelector(`.${name}-wrapper`);
        panel.appendChild(arrow);
        setXY(arrow, rectSvg.width / 4, -rectSvg.height)
    }

    return { viewArrow, startAnimation, stopAnimation }
};