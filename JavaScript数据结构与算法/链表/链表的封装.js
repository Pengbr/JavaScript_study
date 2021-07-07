function LinkedList() {
    // 链表不能通过索引获取值，只能从头开始往后查找
    // 属性
    this.head = null;
    this.length = 0;

    // 内部类
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    // append方法
    LinkedList.prototype.append = function (data) {
        // 创建新节点
        let newNode = new Node(data);
        // 判断添加的是否为第一个节点
        if (this.length == 0) {
            this.head = newNode;
        } else {
            // 找到最后一个节点
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            // 让最后一个节点指向新的节点
            current.next = newNode;
        }
        this.length++;
    }
    // toString方法
    LinkedList.prototype.toString = function () {
        let current = this.head;
        let listString = ''
        while (current) {
            listString += current.data + ' ';
            current = current.next;
        }
        return listString;
    }
    LinkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) {
            return false;
        }
        let newNode = new Node(data);
        if (position == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let index = 0;
            let current = this.head;
            let previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode
        }
        this.length++;
        return true;
    }
    LinkedList.prototype.get = function (position) {
        // 越界判断
        if (position < 0 || position >= this.length) {
            return null;
        }
        let current = this.head;
        let index = 0;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;
    }
    LinkedList.prototype.indexOf = function (data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data == data) {
                return index
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    LinkedList.prototype.update = function (position, newData) {
        if (position < 0 || position >= this.length) {
            return false;
        } else {
            let current = this.head;
            let index = 0;
            while (index++ < position) {
                current = current.next;
            }
            current.data = newData;
            return true;
        }
    }
    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position > this.length) {
            return false;
        }
        if (position == 0) {
            this.head = this.head.next;
        } else {
            let index = 0;
            let current = this.head;
            let previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return true;
    }
    LinkedList.prototype.remove = function (data) {
        let position = this.indexOf(data);
        return this.removeAt(position);
    }
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    }
}

let list = new LinkedList();
list.append('abc');
list.append('cba');
list.append('nba');
console.log(list);
