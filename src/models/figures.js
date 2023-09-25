import { setListenersForDragSvg } from "../controllers/listeners/forDragElements";
import { Arrow } from "../views/animations/arrows";

export const Knight = (() => {
    const knightSvg = document.querySelector('.knight');
    const knightArrow = Arrow(knightSvg, 'knight');

    const setListeners = (() => {
        setListenersForDragSvg(knightSvg);
    })()

    const getRect = () => {
        return knightSvg.getBoundingClientRect();
    }

    const getArrow = () => {
        return knightArrow;
    }

    return { getRect, getArrow }
})();

export const Point = (() => {
    const pointSvg = document.querySelector('.point');
    const pointArrow = Arrow(pointSvg, 'point');

    const setListeners = (() => {
        setListenersForDragSvg(pointSvg);
    })()

    const getRect = () => {
        return pointSvg.getBoundingClientRect();
    }

    const getArrow = () => {
        return pointArrow;
    }

    return { getRect, getArrow }
})();