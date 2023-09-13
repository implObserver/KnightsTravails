export const knightMovesHandler = () => {
  let maxDeep = 4;
  let levelStart = -1;
  let levelEnd = 0;
  let startPath = [];
  let endPath = [];
  let levelStartPointChildrens = [];
  let levelEndPointChildrens = [];

  const getPath = (start, end) => {
    if (start === end) {
      return [start];
    }

    fillingChildMoves([start], "start");
    fillingChildMoves([end], "end");

    const path = [...buildPath(start, end)];
    return path;
  };

  const fillingChildMoves = (point, flag) => {
    for (let i = 0; i < maxDeep; i++) {
      point = setChildrens(point, flag);
    }
  };

  const setChildrens = (pointChildrens, flag = "start") => {
    let childrens = [];
    pointChildrens.forEach((child) => {
      if (child !== null && child !== undefined) {
        childrens = childrens.concat(child.getMoves());
      }
    });
    childrens = new Set(childrens.filter((n) => n));
    childrens = [...childrens];
    flag === "start"
      ? levelStartPointChildrens.push(childrens)
      : levelEndPointChildrens.push(childrens);
    return childrens;
  };

  const buildPath = (start, end) => {
    let intersectPoint = getIntersectPoint();
    buildEndPath(intersectPoint);
    buildStartPath(intersectPoint);
    const path = startPath.filter((n) => n).concat(endPath.filter((n) => n));
    path.unshift(start);
    path.push(end);
    return new Set(path);
  };

  const getIntersectPoint = () => {
    let intersectPoints = [];
    while (intersectPoints.length === 0) {
      levelStart < levelEnd ? ++levelStart : ++levelEnd;
      intersectPoints = checkChildrens(
        levelEndPointChildrens[levelStart],
        levelStartPointChildrens[levelEnd],
      );
    }
    clearChilds();
    endPath.push(intersectPoints[0]);
    return intersectPoints[0];
  };

  const buildEndPath = (intersectPoint) => {
    if (levelEndPointChildrens.length === 0) {
      return;
    } else {
      let intersectPoints = checkChildrens(
        intersectPoint.getMoves(),
        levelEndPointChildrens.pop(),
      );
      endPath.push(intersectPoints[0]);
      buildEndPath(intersectPoints[0]);
    }
  };

  const buildStartPath = (intersectPoint) => {
    if (levelStartPointChildrens.length === 0) {
      return;
    } else {
      let intersectPoints = checkChildrens(
        intersectPoint.getMoves(),
        levelStartPointChildrens.pop(),
      );
      startPath.push(intersectPoints[0]);
      buildStartPath(intersectPoints[0]);
    }
  };

  const checkChildrens = (startChildrens, endChildrens) => {
    const common = startChildrens.filter(
      (child) => endChildrens.indexOf(child) !== -1,
    );
    return common;
  };

  const clearChilds = () => {
    for (let i = 0; i < maxDeep - levelEnd; i++) {
      if (levelEndPointChildrens.length > 1) {
        levelEndPointChildrens.pop();
      }
    }
    for (let i = 0; i < maxDeep - levelStart; i++) {
      if (levelStartPointChildrens.length > 1) {
        levelStartPointChildrens.pop();
      }
    }
  };

  return { getPath };
};
