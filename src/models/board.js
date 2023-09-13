import { Node } from "./node";

export const Board = (() => {
  let board = [];
  const createBoard = (() => {
    for (let i = 0; i < 8; i++) {
      let line = [];
      for (let j = 0; j < 8; j++) {
        const node = Node(i, j);
        line.push(node);
      }
      board.push(line);
    }
  })();

  const getBoard = () => {
    return board;
  };

  return { createBoard, getBoard };
})();
