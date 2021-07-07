function PriorityQueue() {
    // 内部类，类的嵌套
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    // 封装属性
    this.items = [];
    // 实现插入方法
    PriorityQueue.prototype.enqueue = function (element, priority) {
        // 创建一个队列元素
        let queueElement = new QueueElement(element, priority);
        // 判读队列是否为空
        if (this.items.length == 0) {
            this.items.push(queueElement);
        } else {
            // 添加标志，区分两种情况
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
                if (!added) {
                    this.items.push(queueElement);
                }
            }
        }
    }

}

// 创建一个优先级队列对象
let pq = new PriorityQueue();
