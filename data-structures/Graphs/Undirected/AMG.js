// Adjacency matrix Undirected Graph representation

class AdjacencyMatrixUGraph {
  constructor(nodes, edges, edgesToBeCreated) {
    this.adjMatrix = Array.from({ length: nodes }, () => Array(nodes).fill(0));
    this.buildGraphEdges(edges, edgesToBeCreated);
  }

  buildGraphEdges(edges, edgesToBeCreated) {
    for (let edgeIndex = 0; edgeIndex < edges; edgeIndex++) {
      const [u, v] = edgesToBeCreated[edgeIndex].split(",");
      this.adjMatrix[u][v] = 1;
      this.adjMatrix[v][u] = 1;
    }
  }
}

let nodes = 6; // Number of nodes
let edges = 6; // Number of edges
let edgesToBeCreated = ["2,4", "1,3", "5,5", "1,5", "3,4", "4,1"]; // These are created as we don't have I/O with JS

let undirectedGraph = new AdjacencyMatrixUGraph(nodes, edges, edgesToBeCreated);
console.log(undirectedGraph);
