// Adjacency List Undirected Graph representation with Arrays ( Dynamic arrays, since JS has dynamic arrays by default we don't bother )

import Queue from "../../Queue/Queue.js";

class AdjacencyListUGraph {
  constructor(nodes) {
    this.adjList = Array.from({ length: nodes }, () => []);
  }

  addEdge(src, dest) {
    this.adjList[src].push(dest);
    this.adjList[dest].push(src);
  }

  BFS(src) {
    let visited = Array(nodes).fill(false);
    console.log(visited);
    let queue = new Queue();

    queue.enqueue(src);
    visited[src] = true;

    while (queue.length) {
      src = queue.dequeue();
      console.log(src.value + " -> ");

      this.adjList[src.value].forEach((adjNode) => {
        if (visited[adjNode] == false) {
          queue.enqueue(adjNode);
          visited[adjNode] = true;
        }
      });
    }
  }
}

let nodes = 6; // Number of nodes

let undirectedGraph = new AdjacencyListUGraph(nodes);
undirectedGraph.addEdge(2, 3);
undirectedGraph.addEdge(2, 1);
undirectedGraph.addEdge(2, 4);
undirectedGraph.addEdge(3, 1);
undirectedGraph.addEdge(1, 4);

undirectedGraph.BFS(2);

console.log(undirectedGraph);
