import { Knight, Point } from "../../models/figures";
import { changeBoardPriority, currentDemo, demoSteps, endDragDemo } from "../../models/lernPreset";
import { View } from "../../views/animations/presets";

export const removeListenersForDemo = () => {
    Knight.getSvg().removeEventListener('mousedown', changeBoardPriority);
    Knight.getSvg().removeEventListener('mouseup', endDragDemo);
    Point.getSvg().removeEventListener('mousedown', changeBoardPriority);
    Point.getSvg().removeEventListener('mouseup', endDragDemo);
    window.removeEventListener('resize', hideArrow());
}

export const setListenersForDemo = () => {
    window.removeEventListener('resize', hideArrow());
    window.addEventListener('click', demoSteps().step1, { once: true })
    Knight.getSvg().addEventListener('mousedown', changeBoardPriority);
    Knight.getSvg().addEventListener('mouseup', endDragDemo);
    Point.getSvg().addEventListener('mousedown', changeBoardPriority);
    Point.getSvg().addEventListener('mouseup', endDragDemo);

}

export const setListenersForDemoForMibile = () => {
    window.addEventListener('mousedown', demoSteps().step1, { once: true })
    window.addEventListener('resize', hideArrow());
    Knight.getSvg().addEventListener('touchstart', changeBoardPriority);
    Knight.getSvg().addEventListener('touchend', endDragDemo);
    Point.getSvg().addEventListener('touchstart', changeBoardPriority);
    Point.getSvg().addEventListener('touchend', endDragDemo);
}

export const removeListenersForDemoForMobile = () => {
    window.removeEventListener('resize', hideArrow());
    Knight.getSvg().removeEventListener('touchstart', changeBoardPriority);
    Knight.getSvg().removeEventListener('touchend', endDragDemo);
    Point.getSvg().removeEventListener('touchstart', changeBoardPriority);
    Point.getSvg().removeEventListener('touchend', endDragDemo);
}

function hideArrow() {
    var timer;
    return function (e) {
        Knight.getArrow().getSvg().style.visibility = 'hidden';
        Point.getArrow().getSvg().style.visibility = 'hidden';
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            View.knightArrow();
            View.pointArrow();
        }, 600);
    };
}