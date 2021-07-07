function doublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    doublyLinkedList.prototype.append = function (data) {
        let newNode = new Node(data);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode
            this.tail = newNode;
        }
        this.length++;
    }
    doublyLinkedList.prototype.toString = function () {
        return this.backwardString();
    }
    doublyLinkedList.prototype.forwardString = function () {
        let current = this.tail;
        let resultString = '';
        while (current) {
            resultString += current.data;
            current = current.prev;
        }
        return resultString;
    }
    doublyLinkedList.prototype.backwardString = function () {
        let current = this.head;
        let resultString = '';
        while (current) {
            resultString += current.data + ' ';
            current = current.next;
        }
        return resultString;
    }
    doublyLinkedList.prototype.insert = function (position, data) {
        // 越界判断
        if (position < 0 || position > this.length) {
            return false;
        }
        let newNode = new Node(data);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (position == 0) {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            } else if (position == this.length) {
                newNode.prev = this.tail;
                this.tail.next = newNode
                this.tail = newNode;
            } else {
                let current = this.head;
                let index = 0;
                while (index++ < position) {
                    current = current.next;
                }
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
            }
        }
        this.length++;
    }
    doublyLinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) {
            return null;
        } else {
            let current = this.head;
            let index = 0;
            // 前++就是先加再用这个变量，后++就是先用这个变量再加加
            while (index++ < position) {
                current = current.next;
            }
            return current.data;
        }
    }
    doublyLinkedList.prototype.indexOf = function (data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data == data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    doublyLinkedList.prototype.update = function (position, newData) {
        if (position < 0 || position >= this.length) return false;
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        }
        current.data = newData;
        return true;
    }
    doublyLinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null;
        let current = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            if (position == 0) {
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if (position == this.length - 1) {
                current = this.tail;
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            } else {
                let index = 0;
                while (index++ < position) {
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        this.length--;
        return current.data;
    }
    doublyLinkedList.prototype.remove = function (data) {
        let index = this.indexOf(data);
        return this.removeAt(index);
    }
    doublyLinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    }
    doublyLinkedList.prototype.size = function () {
        return this.length;
    }
    doublyLinkedList.prototype.getHead = function () {
        return this.head.data;
    }
    doublyLinkedList.prototype.getTail = function () {
        return this.tail.data;
    }
}
