import { SmoothAnimations } from "../views/animations/animations";
import { Elements } from "./elements";

const AnimatingObject = () => {
    let animation = SmoothAnimations.SmoothVisibility.view(Elements.board, 1, 1, 1, 'forwards');

    const setAnimation = (newAnimation) => {
        animation.pause();
        animation = newAnimation;
    }

    const getAnimation = () => {
        return animation;
    }

    return { setAnimation, getAnimation };
}

export const ActiveArrow = (() => {
    const prototype = AnimatingObject();
    return prototype;
})();

export const ActiveText = (() => {
    const prototype = AnimatingObject();
    return prototype;
})();
