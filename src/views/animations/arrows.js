import { Animations } from "./animations";

export const getMove = (arrow, rectParent, rectArrow) => {
    Animations.transform.x(arrow, `${rectParent.x}px`, `${rectParent.x + rectParent.width}px`, 400, 'forwards').finished.then(() => {
        Animations.transform.x(arrow, `${rectParent.x + rectParent.width}px`, `${rectParent.x}px`, 400, 'forwards')
    });
    Animations.transform.y(arrow, `${rectParent.y}px`, `${rectParent.y - rectParent.height}px`, 400, 'forwards').finished.then(() => {
        Animations.transform.y(arrow, `${rectParent.y - rectParent.height}px`, `${rectParent.y}px`, 400, 'forwards')
    });

}

export const setXY = (arrow, rect) => {
    const xforms = arrow.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(rect.height, -rect.width);
}