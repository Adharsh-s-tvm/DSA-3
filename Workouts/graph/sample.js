class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = [];
        }
    }

    addEdge(v1, v2){
        if(!this.adjList[v1]) {
            this.addVertex(v1)
        }
        if(!this.adjList[v2]) {
            this.addVertex(v2)
        }

        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    printAll(){
        for (let vertex in this.adjList){
            console.log(vertex, '=>' , this.adjList[vertex].join(', '))
        }
    }

}


let g = new Graph();

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')


g.addEdge('A', 'C') 
g.addEdge('B', 'D') 
g.addEdge('A', 'D') 


g.printAll()