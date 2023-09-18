export function makeDraggable(svg) {
    var selectedElement = false;
    let count = 0;
    let gag = document.createElement('gag');
    let last = gag;
    let cellIndex = 1;
    let parent;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseover', endDrag);

    function startDrag(e) {
        parent = svg.parentElement;
        selectedElement = svg;
        let rect = svg.getBoundingClientRect();
        let svgX = rect.x + parseInt(rect.width / 2);
        let svgY = rect.y + parseInt(rect.height / 2);
        const elements = document.elementsFromPoint(svgX, svgY);
        if (elements[0].getAttributeNames()[0] === 'd') {
            cellIndex = 2;
        }
    }

    function drag(e) {
        if (selectedElement) {
            let rect = svg.getBoundingClientRect();
            let svgX = rect.x + parseInt(rect.width / 2);
            let svgY = rect.y + parseInt(rect.height / 2);
            let cursorX = e.clientX;
            let cursorY = e.clientY;
            let isCell = false;
            ++count;
            setXY(svg, cursorX - svgX, cursorY - svgY);
            svgX = svg.getBoundingClientRect().x;
            svgY = svg.getBoundingClientRect().y;
            if (count > 4) {
                const elements = document.elementsFromPoint(cursorX, cursorY);
                const element = elements[cellIndex];
                if (element.children.length === 0) {
                    if (element.className === 'cell') {
                        isCell = true;
                        if (element !== last) {
                            element.style.border = '1vh red solid';
                            if (last.children.length === 0) {
                                last.style.border = '';
                            }
                            last = element;
                        }
                    }
                    if (!isCell) {
                        if (last.children.length === 0) {
                            last.style.border = '';
                        }
                        last = gag;
                    }
                    count = 0;
                } else {
                    count = 5;
                }
            }
        }
    }

    function endDrag() {
        selectedElement = false;
        defaultXY(svg);
        if (last !== gag && last !== parent) {
            if (last.children.length === 0) {
                parent.style.border = '';
                last.appendChild(svg);
                last.style.border = '1vh green solid';
            }
        }
    }

    function reset() {
        selectedElement = false;
        defaultXY(svg);
    }
}



const getXY = (myElement) => {
    const xforms = myElement.transform.baseVal; // An SVGTransformList
    const firstXForm = xforms.getItem(0);       // An SVGTransform
    if (firstXForm.type == SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        const firstX = firstXForm.matrix.e;
        const firstY = firstXForm.matrix.f;
        return [firstX, firstY];
    }

}

const setXY = (myElement, x, y) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(firstXForm.matrix.e + x, firstXForm.matrix.f + y);
}

const defaultXY = (myElement) => {
    const xforms = myElement.transform.baseVal;
    const firstXForm = xforms.getItem(0);
    firstXForm.setTranslate(0, 0);
}