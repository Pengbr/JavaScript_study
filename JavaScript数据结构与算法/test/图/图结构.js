// 图的构成，顶点与边
class Graph {
//    属性：顶点（数组）/ 边（字典）
    constructor() {
        this.vertexes = []
        this.edges = new Map()
    }

    addVertex(v) {
        this.vertexes.push(v)
        // 散列表的思想
        this.edges.set(v, [])
    }

    addEdge(v1, v2) {
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    }

    toString() {
        let resultString = ''
        for (let i = 0; i < this.vertexes.length; i++) {
            resultString += this.vertexes[i] + '->'
            let vEdges = this.edges.get(this.vertexes[i])
            for (let j = 0; j < vEdges.length; j++) {
                resultString += vEdges[j] + ' '
            }
            resultString += '\n'
        }
        return resultString
    }

    initializeColor() {
        let colors = []
        for (let i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = 'white'
        }
        return colors
    }

    // 广度优先搜索
    bfs(initV, handler) {
        let colors = this.initializeColor()
        let queue = new Queue()
        queue.enqueue(initV)
        while (!queue.isEmpty()) {
            let v = queue.dequeue()
            let vList = this.edges.get(v)
            colors[v] = 'grey'
            for (let i = 0; i < vList.length; i++) {
                let e = vList[i]
                if (colors[e] === 'white') {
                    colors[e] = 'grey'
                    queue.enqueue(e)
                }
            }
            handler(v)
            colors[v] = 'black'
        }
    }
}

let g = new Graph()
let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertexes.length; i++) {
    g.addVertex(myVertexes[i])
}

// 添加边
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('C', 'D')
g.addEdge('C', 'G')
g.addEdge('D', 'G')
g.addEdge('D', 'H')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('E', 'I')

console.log(g)
// console.log(g.initialize())

