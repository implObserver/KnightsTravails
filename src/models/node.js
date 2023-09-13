export const Node = (cX, cY) => {
  const x = cX;
  const y = cY;

  let moves = [8];

  const setMove = (node, index) => {
    moves[index] = node;
  };

  const getMoves = () => {
    return moves;
  };

  const getCoordinates = () => {
    return [cX, cY];
  };

  return { setMove, getMoves, getCoordinates };
};
