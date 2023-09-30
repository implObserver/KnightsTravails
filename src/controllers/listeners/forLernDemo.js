import { Knight, Point } from "../../models/figures";
import { changeBoardPriority, currentDemo, defaultArrow, demoSteps, endDragDemo } from "../../models/lernPreset";

export const removeListenersForDemo = () => {
    Knight.getSvg().removeEventListener('mousedown', changeBoardPriority);
    Knight.getSvg().removeEventListener('mouseup', endDragDemo);
    Point.getSvg().removeEventListener('mousedown', changeBoardPriority);
    Point.getSvg().removeEventListener('mouseup', endDragDemo);
    window.removeEventListener('resize', defaultArrow);
}

export const setListenersForDemo = () => {
    window.addEventListener('click', demoSteps().step1, { once: true })
    window.addEventListener('resize', defaultArrow);
    Knight.getSvg().addEventListener('mousedown', changeBoardPriority);
    Knight.getSvg().addEventListener('mouseup', endDragDemo);
    Point.getSvg().addEventListener('mousedown', changeBoardPriority);
    Point.getSvg().addEventListener('mouseup', endDragDemo);
}

export const setListenersForDemoForMibile = () => {
    window.addEventListener('click', demoSteps().step1, { once: true })
    window.addEventListener('resize', defaultArrow);
    Knight.getSvg().addEventListener('touchstart', changeBoardPriority);
    Knight.getSvg().addEventListener('touchend', endDragDemo);
    Point.getSvg().addEventListener('touchstart', changeBoardPriority);
    Point.getSvg().addEventListener('touchend', endDragDemo);
}

export const removeListenersForDemoForMobile = () => {
    window.removeEventListener('resize', defaultArrow);
    Knight.getSvg().removeEventListener('touchstart', changeBoardPriority);
    Knight.getSvg().removeEventListener('touchend', endDragDemo);
    Point.getSvg().removeEventListener('touchstart', changeBoardPriority);
    Point.getSvg().removeEventListener('touchend', endDragDemo);
}