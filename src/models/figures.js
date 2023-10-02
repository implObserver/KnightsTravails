import { setListenersForDragSvg, setListenersForDragSvgForMibile } from "../controllers/listeners/forDragElements";
import { SmoothAnimations } from "../views/animations/animations";
import { getMove, setXY } from "../views/animations/arrows";
import { getArrowNode } from "../views/nodes/arrow";
import { ActiveArrow } from "./currentAnimations";

export const Figure = (newSvg) => {
    const svg = newSvg;
    let parent;
    let cell;

    const getRect = () => {
        return svg.getBoundingClientRect();
    }

    const getSvg = () => {
        return svg;
    }

    const setParent = (nParent) => {
        parent = nParent;
    }

    const getParent = () => {
        return parent;
    }

    const getCell = () => {
        return cell;
    }

    const setCell = (nCell) => {
        cell = nCell;
    }

    return { getCell, setCell, getRect, getSvg, setParent, getParent }
}

export const Arrow = (parent, name) => {
    const prototype = Figure(getArrowNode(name));
    const arrow = prototype.getSvg();
    let interval;

    const view = () => {
        const wrapper = document.querySelector(`.${name}-wrapper`);
        wrapper.appendChild(arrow);

        setTimeout(() => {
            ActiveArrow.setAnimation(SmoothAnimations.SmoothVisibility.view(arrow, 0, 1, 500, 'forwards'));
        }, 1500);
    }

    const setPosition = () => {
        let rectParent = parent.getRect();
        setXY(arrow, rectParent);
    }

    const move = () => {
        interval = setInterval(() => {
            let rectArrow = prototype.getRect();
            let rectParent = parent.getRect();
            setXY(arrow, rectParent);
            getMove(arrow, rectParent, rectArrow);
        }, 800);
    }

    const hide = () => {
        ActiveArrow.setAnimation(SmoothAnimations.SmoothVisibility.hide(arrow, 1, 0, 500, 'forwards'));
    }

    return Object.assign(prototype, { setPosition, view, hide, move });
}

export const Knight = (() => {
    const prototype = Figure(document.querySelector('.knight'));
    const arrow = Arrow(prototype, 'knight');

    prototype.setParent(document.querySelector('.knight-wrapper'));

    const setListeners = (() => {
        setListenersForDragSvg(prototype.getSvg());
        setListenersForDragSvgForMibile(prototype.getSvg());
    })()

    const getArrow = () => {
        return arrow;
    }

    return Object.assign(prototype, { getArrow });
})();

export const Point = (() => {
    const prototype = Figure(document.querySelector('.point'));
    const arrow = Arrow(prototype, 'point');

    prototype.setParent(document.querySelector('.point-wrapper'));

    const setListeners = (() => {
        setListenersForDragSvg(prototype.getSvg());
        setListenersForDragSvgForMibile(prototype.getSvg());
    })()

    const getArrow = () => {
        return arrow;
    }

    return Object.assign(prototype, { getArrow });
})();