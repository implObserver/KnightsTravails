import { Animations } from "./animations";

export const getMove = (arrow, rectParent, rectArrow) => {
    Animations.transform.x(arrow, `${rectParent.x}px`, `${rectArrow.x}px`, 200);
    Animations.transform.y(arrow, `${rectParent.y}px`, `${rectArrow.y}px`, 200).finished.then(() => {
        Animations.transform.x(arrow, `${rectArrow.x}px`, `${rectParent.x}px`, 200);
        Animations.transform.y(arrow, `${rectArrow.y}px`, `${rectParent.y}px`, 200)
    })
}

export const setXY = (myElement, x, y) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(x, y);
}