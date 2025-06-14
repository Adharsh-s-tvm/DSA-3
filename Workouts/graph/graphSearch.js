class Graph {
    constructor() {
        this.adList = []
    }

    addVertex(vertex) {
        if (!this.adList[vertex]) {
            this.adList[vertex] = []
        }
    }

    addEdge(v1, v2) {
        if (!this.adList[v1]) this.addVertex(v1)
        if (!this.adList[v2]) this.addVertex(v2)

        this.adList[v1].push(v2)
        this.adList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adList[v1] = this.adList[v1].filter((val) => val !== v2)
        this.adList[v2] = this.adList[v2].filter((val) => val !== v1)
    }

    removeVertex(vertex) {
        if (!this.adList[vertex]) return null;

        for (let val of this.adList[vertex]) {
            this.removeEdge(val, vertex)
        }
        delete this.adList[vertex]
    }

    printAll() {
        for (let vertex in this.adList) {
            console.log(vertex, '=>', this.adList[vertex].join(', '));
        }
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set([start]);
        const result = [];

        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);

            for (let neighbor of this.adList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    dfs(start) {
        const stack = [start];
        const visited = new Set([start]);
        const result = [];

        while (stack.length) {
            let vertex = stack.pop();
            result.push(vertex);

            for (let neighbor of this.adList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor)
                }
            }
        }
        return result
    }


    shortest(start, end) {
        const queue = [[start]];
        const visited = new Set([start]);

        while (queue.length) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (node === end) return path;

            for (let neighbor of this.adList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor])
                }
            }
        }
        return null;
    }

    hasCycle() {
        const visited = new Set();

        const dfs = (node, parent) => {
            visited.add(node);

            for (let neighbor of this.adList[node]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, node)) return true;
                } else if (neighbor !== parent) {
                    return true;
                }
            }
            return false;
        }
        for(let vertex in this.adList){
            if(!visited.has(vertex)){
                if(dfs(vertex, null)) return true;
            }
        }
        return false;
    }

    cloneGraph(){

        const newGraph = new Graph();

        for(let vertex in this.adList){
            newGraph.addVertex(vertex)
        }

        const visitedEdges = new Set();

        for(let vertex in this.adList){
            for(let neighbor of this.adList[vertex]){
                let edgeKey = [vertex, neighbor].sort().join('-');

                if(!visitedEdges.has(edgeKey)){
                    newGraph.addEdge(vertex, neighbor);
                    visitedEdges.add(edgeKey)
                }
            }
        }
        return newGraph;
    }


}




const g = new Graph();



g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')


g.addEdge('A', 'C')
g.addEdge('C', 'E')
g.addEdge('A', 'D')
g.addEdge('F', 'D')
g.addEdge('E', 'A')
g.addEdge('E', 'B')
g.addEdge('C', 'B')

let cloned = g.cloneGraph();


(cloned.printAll());