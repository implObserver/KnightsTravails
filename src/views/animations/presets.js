import { Elements } from "../../models/elements";
import { Knight, Point } from "../../models/figures";
import { SmoothAnimations } from "./animations";

export const View = (() => {
    const popup = () => {
        return SmoothAnimations.SmoothVisibility.view(Elements.popup, 0, 1, 500, 'forwards');
    }
    const board = () => {
        return SmoothAnimations.SmoothVisibility.view(Elements.board, 0, 1, 500, 'forwards');
    }
    const textContainer = () => {
        return SmoothAnimations.SmoothVisibility.view(Elements.textContainer, 0, 1, 500, 'forwards');
    }

    const knightArrow = () => {
        return SmoothAnimations.SmoothVisibility.view(Knight.getArrow().getSvg(), 0, 1, 500, 'forwards');
    }

    const pointArrow = () => {
        return SmoothAnimations.SmoothVisibility.view(Point.getArrow().getSvg(), 0, 1, 500, 'forwards');
    }

    const knightWrapper = () => {
        return SmoothAnimations.SmoothVisibility.view(Elements.knightWrapper, 0, 1, 500, 'forwards');
    }

    const pointWrapper = () => {
        return SmoothAnimations.SmoothVisibility.view(Elements.pointWrapper, 0, 1, 500, 'forwards');
    }

    const knightText = () => {
        return SmoothAnimations.SmoothVisibility.view(Elements.knightText, 0, 1, 500, 'forwards');
    }

    const pointText = () => {
        return SmoothAnimations.SmoothVisibility.view(Elements.pointText, 0, 1, 500, 'forwards');
    }

    return { popup, board, textContainer, knightArrow, pointArrow, knightWrapper, pointWrapper, knightText, pointText };
})();

export const Hide = (() => {
    const popup = () => {
        return SmoothAnimations.SmoothVisibility.hide(Elements.popup, 1, 0, 500, 'forwards');
    }

    const board = () => {
        return SmoothAnimations.SmoothVisibility.hide(Elements.board, 1, 0, 500, 'forwards');
    }

    const textContainer = () => {
        return SmoothAnimations.SmoothVisibility.hide(Elements.textContainer, 1, 0, 500, 'forwards');
    }

    const knightArrow = () => {
        return SmoothAnimations.SmoothVisibility.hide(Knight.getArrow().getSvg(), 1, 0, 100, 'forwards');
    }

    const pointArrow = () => {
        return SmoothAnimations.SmoothVisibility.hide(Point.getArrow().getSvg(), 1, 0, 500, 'forwards');
    }

    const knightWrapper = () => {
        return SmoothAnimations.SmoothVisibility.hide(Elements.knightWrapper, 1, 0, 500, 'forwards');
    }

    const pointWrapper = () => {
        return SmoothAnimations.SmoothVisibility.hide(Elements.pointWrapper, 1, 0, 500, 'forwards');
    }

    const knightText = () => {
        return SmoothAnimations.SmoothVisibility.hide(Elements.knightText, 1, 0, 500, 'forwards');
    }

    const pointText = () => {
        return SmoothAnimations.SmoothVisibility.hide(Elements.pointText, 1, 0, 500, 'forwards');
    }

    return { popup, board, textContainer, knightArrow, pointArrow, knightWrapper, pointWrapper, knightText, pointText };
})();