// Adjacency matrix Undirected Graph representation

class AdjacencyListUGraph {
  constructor(nodes, edges, edgesToBeCreated) {
    this.adjList = Array.from({ length: nodes }, () => []);
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }
}

let nodes = 6; // Number of nodes
let edges = 6; // Number of edges
let edgesToBeCreated = ["2,4", "1,3", "5,5", "1,5", "3,4", "4,1"]; // These are created as we don't have I/O with JS

let undirectedGraph = new AdjacencyListUGraph(nodes, edges, edgesToBeCreated);
undirectedGraph.addEdge(2, 3)
undirectedGraph.addEdge(3, 1)
undirectedGraph.addEdge(1, 4)

console.log(undirectedGraph);