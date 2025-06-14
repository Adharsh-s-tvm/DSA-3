class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(n => n !== v2);
        this.adjList[v2] = this.adjList[v2].filter(n => n !== v1);
    }

    removeVertex(vertex) {
        if (!this.adjList[vertex]) return false;

        for (let neighbor of this.adjList[vertex]) {
            this.removeEdge(vertex, neighbor);
        }
        delete this.adjList[vertex];
        return true;
    }

    printGraph() {
        for (let vertex in this.adjList) {
            console.log(vertex, '=>', this.adjList[vertex].join(', '));
        }
    }

    bfs(start) {
        const queue = [start];
        const visited = new Set([start]);
        const result = [];

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            for (let neighbor of this.adjList[vertex]) {
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
            const vertex = stack.pop();
            result.push(vertex);

            for (let neighbor of this.adjList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }

        return result;
    }

    shortestPath(start, end) {
        const queue = [[start]];
        const visited = new Set([start]);

        while (queue.length) {
            const path = queue.shift();
            const node = path[path.length - 1];

            if (node === end) return path;

            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor]);
                }
            }
        }

        return null;
    }

    hasCycle() {
        const visited = new Set();

        const dfs = (node, parent) => {
            visited.add(node);

            for (let neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, node)) return true;
                } else if (neighbor !== parent) {
                    return true;
                }
            }

            return false;
        };

        for (let vertex in this.adjList) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, null)) return true;
            }
        }

        return false;
    }

    cloneGraph(start) {
        if (!this.adjList[start]) return null;

        const cloneMap = {};

        const dfs = (node) => {
            if (cloneMap[node]) return cloneMap[node];

            cloneMap[node] = [];
            for (let neighbor of this.adjList[node]) {
                cloneMap[node].push(dfs(neighbor));
            }

            return node;
        };

        dfs(start);

        const clonedGraph = new Graph();
        for (let node in cloneMap) {
            clonedGraph.addVertex(node);
        }
        for (let node in cloneMap) {
            for (let neighbor of cloneMap[node]) {
                clonedGraph.addEdge(node, neighbor);
            }
        }
        return clonedGraph;
    }
}
