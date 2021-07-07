class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        // this.items[this.items.length] = element
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
        this.count = 0
    }
}


// const s = new Stack()
// console.log(s.isEmpty());
// s.push(5)
// s.push(8)
// console.log(s.peek());
// s.push(11)
// console.log(s.size());
// console.log(s.isEmpty());

function convert(number) {
    const s = new Stack()
    let rem
    let binaryString = ''
    while (number % 2 !== 0) {
        rem = number - (number % 2) * 2
        s.push(rem)
        number = number % 2
    }
    while (!s.isEmpty()) {
        binaryString += s.pop().toString()
        // console.log(s.pop())
    }
    return binaryString
}

console.log(convert(10))
