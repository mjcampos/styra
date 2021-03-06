import {generateNodes} from './generate_nodes';

// We will test your final solution with tens of thousands of nodes.
export const nNodes = 100;

// Use `undefined` for a new sequence each page reload.
const seed = '2357';

// → generateNodes(3, 5)
// ←
// {
//   "node2": {
//     "node0": 36,
//     "node1": 81
//   },
//   "node0": {
//     "node2": 36,
//     "node1": 40
//   },
//   "node1": {
//     "node0": 40,
//     "node2": 81
//   }
// }

export const nodes = generateNodes(nNodes, seed);
export const nEdges = Object.keys(nodes).reduce((n, x) => n + Object.keys(nodes[x]).length, 0);
export const nEdgesAvg = nEdges / nNodes;

// console.log(`${nEdges} edges ÷ ${nNodes} nodes ≈ ${nEdgesAvg.toFixed(2)} edges per node`);