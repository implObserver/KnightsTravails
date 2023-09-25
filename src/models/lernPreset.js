import { SmoothAnimations } from "../views/animations/animations";
import { Knight, Point } from "./figures"

export const startLern = () => {
    const knightArrow = Knight.getArrow();
    const pointArrow = Point.getArrow();
    const popup = document.querySelector('.popup');
    const textContainer = document.querySelector('.text-container');
    SmoothAnimations.SmoothVisibility.open(popup, 0, 1, 1000, 'forwards').finished.then(() => {
        SmoothAnimations.SmoothVisibility.open(textContainer, 0, 1, 1000, 'forwards');
    });
    //knightArrow.viewArrow();
    //pointArrow.viewArrow();
    //knightArrow.startAnimation();
    //pointArrow.startAnimation();
}