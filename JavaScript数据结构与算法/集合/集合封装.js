function Set() {
    // 数组允许元素重复，对象的key（集合类）不允许重复，所以用对象封装集合
    // this代表当前集合对象
    this.items = {};
    Set.prototype.add = function (value) {
        if (this.has(value)) return false;
        this.items[value] = value;
        return true;
    }
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value);
    }
    Set.prototype.remove = function (value) {
        if (!this.has(value)) return false;
        delete this.items[value];
        return true;
    }
    Set.prototype.clear = function () {
        this.items = {};
    }
    Set.prototype.size = function () {
        return Object.keys(this.items).length;
    }
    Set.prototype.values = function () {
        return Object.keys(this.items);
    }
    // 集合间的操作
    // 并集
    Set.prototype.union = function (otherSet) {
        let unionSet = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    // 交集
    Set.prototype.intersection = function (otherSet) {
        let intersection = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (otherSet.has(item)) {
                intersection.add(item);
            }
        }
        return intersection;
    }
    // 差集
    Set.prototype.difference = function (otherSet) {
        let difference = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (!otherSet.has(item)) {
                difference.add(item);
            }
        }
        return difference;
    }
    // 子集
    Set.prototype.subset = function (otherSet) {
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (!otherSet.has(item)) {
                return false;
            }
        }
        return true;
    }
}

let set = new Set();
console.log(set.add('abc'));
console.log(set.add('abc'));
console.log(set.add('cba'));
console.log(set.add('nba'));
console.log(set.add('mba'));
console.log(set.values());
console.log(set.remove('mba'));
console.log(set.remove('mba'));
console.log(set.values());
console.log(set.size());
console.log(set.clear());
console.log(set.size());
