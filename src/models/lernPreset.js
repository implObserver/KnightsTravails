import { removeListenersForDemo, removeListenersForDemoForMobile, setListenersForDemo, setListenersForDemoForMibile } from "../controllers/listeners/forLernDemo";
import { Hide, View } from "../views/animations/presets";
import { ActiveText } from "./currentAnimations";
import { Elements } from "./elements";
import { Knight, Point } from "./figures";

export const currentDemo = (() => {
    let demo;

    const getDemo = () => {
        return demo;
    }

    const setdemo = (nDemo) => {
        demo = nDemo;
    }

    return { setdemo, getDemo };
})();

export const startLern = () => {
    demoSteps().start();
}

export const demoSteps = () => {
    const start = () => {
        setListenersForDemo();
        setListenersForDemoForMibile();
        Knight.getSvg().style.pointerEvents = 'none';
        Point.getSvg().style.pointerEvents = 'none';
        View.popup();
        setTimeout(() => {
            View.textContainer();
        }, 1000);
    }

    const step1 = () => {
        Elements.knightWrapper.style.zIndex = '501';
        Hide.textContainer();
        View.knightWrapper();
        setTimeout(() => {
            knightDemo();
        }, 1000);
    }

    const step2 = () => {
        Elements.pointWrapper.style.zIndex = '501';
        View.pointWrapper();
        setTimeout(() => {
            pointDemo();
        }, 1000);
    }

    const end = () => {
        removeListenersForDemo();
        removeListenersForDemoForMobile();
        Elements.knightWrapper.removeChild(Knight.getArrow().getSvg());
        Elements.pointWrapper.removeChild(Point.getArrow().getSvg());
        Knight.getSvg().style.pointerEvents = 'all';
        Hide.popup();
    }

    return { start, step1, step2, end }
}

const knightDemo = () => {
    Knight.getArrow().getSvg().style.zIndex = 600;
    Knight.getArrow().setPosition();
    Knight.getArrow().view();
    Knight.getArrow().move();
    ActiveText.setAnimation(View.knightText());

    setTimeout(() => {
        Knight.getSvg().style.pointerEvents = 'all';
    }, 1000);
}

const pointDemo = () => {
    Point.getArrow().setPosition();
    Point.getArrow().view();
    Point.getArrow().move();
    ActiveText.setAnimation(View.pointText());
    setTimeout(() => {
        Point.getSvg().style.pointerEvents = 'all';
    }, 1000);
}

export const changeBoardPriority = (e) => {
    const svgName = e.target.className.baseVal;
    if (svgName === 'knight') {
        addBoardPriority(Knight);
        Knight.getArrow().hide();
        ActiveText.setAnimation(Hide.knightText());
    }
    if (svgName === 'point') {
        Point.getArrow().hide();
        ActiveText.setAnimation(Hide.pointText());
    }

}

const addBoardPriority = async () => {
    Hide.textContainer();
    View.board();
    Elements.board.style.zIndex = '501';
}

const removeBoardPriority = async () => {
    Elements.board.style.zIndex = '100';
}

export const endDragDemo = (e) => {
    const svgName = e.target.className.baseVal;
    if (svgName === 'knight') {
        if (Knight.getParent().className === 'knight-wrapper') {
            Knight.getArrow().view();
            ActiveText.setAnimation(View.knightText());
            removeBoardPriority(Knight);
        } else {
            e.target.style.pointerEvents = ' none';
            document.querySelector('.knight-wrapper').style.zIndex = '1';
            demoSteps().step2();
        }
    }
    if (svgName === 'point') {
        if (Point.getParent().className !== 'point-wrapper') {
            document.querySelector('.point-wrapper').style.zIndex = '1';
            demoSteps().end();
        } else {
            Point.getArrow().view();
            ActiveText.getAnimation();
            ActiveText.setAnimation(View.pointText());
        }
    }
}