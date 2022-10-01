// Adjacency List Undirected Graph representation with Sets / Hash

class AdjacencyListUGraphSet {
  constructor(nodes) {
    this.adjList = Array.from({length: nodes}, () => new Set());
  }

  addEdge(src, dest) {
    this.adjList[src].add(dest)
    this.adjList[dest].add(src)
  }

  searchEdge(src, dest) {
    if(!this.adjList[src].has(dest)) console.log('Edge not found')
    else console.log('Edge from ' + src + ' -> ' + dest + " exits!")
  }
}


let nodes = 6; // Number of nodes

let undirectedGraph = new AdjacencyListUGraphSet(nodes);
undirectedGraph.addEdge(2, 3)
undirectedGraph.addEdge(3, 1)
undirectedGraph.addEdge(1, 4)

undirectedGraph.searchEdge(1,4)

console.log(undirectedGraph);