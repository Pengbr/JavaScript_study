function Queue() {
    this.items = [];

    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    }

    Queue.prototype.dequeue = function () {
        this.items.shift();
    }

    Queue.prototype.front = function () {
        return this.items[0];
    }

    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    }

    Queue.prototype.size = function () {
        return this.items.length;
    }

    Queue.prototype.toString = function () {
        let resultString = '';
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }

}

function passGame(nameList, num) {
    let q = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        q.enqueue(nameList[i]);
    }
    while (q.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            q.enqueue(q.dequeue());
        }
        q.dequeue()
    }
    console.log(q.size());
    let endName = q.front();
    console.log(endName);
    return nameList.indexOf(endName);
}

names = ['lily', 'lucy', 'tom', 'lilei', 'why'];
console.log(passGame(names),3);
