import { ActiveBoard, Board } from "../../models/board";
import { ActiveFigure } from "../../models/currentAnimations";
import { Elements } from "../../models/elements";
import { Knight, Point } from "../../models/figures";
import { FiguresPositions } from "../../models/figuresPositions";
import { Animations } from "./animations";

export const startMove = (path) => {
    let interval = setInterval(() => {
        if (path.length < 1) {
            clearInterval(interval);
            moveX(Point.getCell());
            setTimeout(() => {
                resetKnight();
                Knight.getSvg().style.pointerEvents = 'all';
                Point.getSvg().style.pointerEvents = 'all';
            }, 1600);
        } else {
            moveX(path.shift());
        }
    }, 800);
}

export const resetKnight = () => {
    Knight.setCell(FiguresPositions.knight);
    Knight.getCell().getNode().appendChild(Knight.getSvg());
}

export const moveX = (finish) => {
    try {
        let startCoordinates = Knight.getCell().getCoordinates();
        let finishCoordinates = finish.getCoordinates();
        let startX = startCoordinates[0];
        let startY = startCoordinates[1];
        let finishX = finishCoordinates[0];
        let finishY = finishCoordinates[1];

        if (startX === finishX) {
            if (startY !== finishY) {
                return moveY(finish);
            }
            return true;
        } else {
            let nextPoint = startX > finishX ? ActiveBoard.getBoard().getCells()[startX - 1][startY] : ActiveBoard.getBoard().getCells()[startX + 1][startY];
            let nextPointRect = nextPoint.getNode().getBoundingClientRect();
            let nextPointRectX = nextPointRect.x;
            ActiveFigure.setAnimation(Animations.transform.x(Knight.getSvg(), `${Knight.getRect().x}px`, `${nextPointRectX}px`, 100));
            ActiveFigure.getAnimation().finished.then(() => {
                nextPoint.getNode().appendChild(Knight.getSvg());
                Knight.setCell(nextPoint)
                moveX(finish);
            });
        }
    } catch (error) {
        console.log('errr')
        console.log(error)
    }
}

export const moveY = (finish) => {
    try {
        let startCoordinates = Knight.getCell().getCoordinates();
        let finishCoordinates = finish.getCoordinates();
        let startX = startCoordinates[0];
        let startY = startCoordinates[1];
        let finishX = finishCoordinates[0];
        let finishY = finishCoordinates[1];

        if (startY === finishY) {
            if (startX !== finishX) {
                return moveX(finish);
            }

            return true;
        } else {
            let nextPoint = startY > finishY ? ActiveBoard.getBoard().getCells()[startX][startY - 1] : ActiveBoard.getBoard().getCells()[startX][startY + 1];
            let nextPointRect = nextPoint.getNode().getBoundingClientRect();
            let nextPointRectY = nextPointRect.y;
            ActiveFigure.setAnimation(Animations.transform.y(Knight.getSvg(), `${Knight.getRect().y}px`, `${nextPointRectY}px`, 100));
            ActiveFigure.getAnimation().finished.then(() => {
                nextPoint.getNode().appendChild(Knight.getSvg());
                Knight.setCell(nextPoint)
                moveY(finish);
            })
        }
    } catch (error) {
        console.log('errr')
        console.log(error)
    }
}