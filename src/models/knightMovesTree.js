import { Board } from "./board";

const buildTree = (() => {
  const arr = Board.getBoard();
  const processedArrayToTree = () => {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let node = arr[j][i];
        node.setMove(getNode(j - 2, i - 1), 0);
        node.setMove(getNode(j - 1, i - 2), 1);
        node.setMove(getNode(j + 1, i - 2), 2);
        node.setMove(getNode(j + 2, i - 1), 3);
        node.setMove(getNode(j + 2, i + 1), 4);
        node.setMove(getNode(j + 1, i + 2), 5);
        node.setMove(getNode(j - 1, i + 2), 6);
        node.setMove(getNode(j - 2, i + 1), 7);
      }
    }
  };

  const getNode = (x, y) => {
    try {
      return arr[x][y];
    } catch {
      return null;
    }
  };

  return { processedArrayToTree };
})();

export const KnightMovesTree = (() => {
  const root = buildTree.processedArrayToTree();
  const getRoot = () => {
    return root;
  };

  return { getRoot };
})();
