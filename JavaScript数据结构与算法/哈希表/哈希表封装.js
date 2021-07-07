function HashTable() {
    this.storage = [];
    this.count = 0;
    this.limit = 7;

    HashTable.prototype.hashFunc = function (str, size) {
        let hashCode = 0;
        // 霍纳算法，来计算hashCode的值
        for (let i = 0; i < str.length; i++) {
            // 将字符串转换为unicode编码
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        // 取余操作
        let index = hashCode % size;
        return index;
    }
    // 三维数组
    HashTable.prototype.put = function (key, value) {
        // 根据key获取对应的index
        let index = this.hashFunc(key, this.limit);
        // 根据index取出对应的bucket
        let bucket = this.storage[index];
        // 判断bucket是否为null
        if (bucket == null) {
            bucket = [];
            this.storage[index] = bucket;
        }
        // 判断是否是修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                tuple[1] = value;
                return
            }
        }
        // 进行添加操作
        bucket.push([key, value]);
        this.count++;
        if (this.count > this.limit * 0.75) {
            this.resize(this.getPrime(this.limit * 2));
        }
    }
    // 通过key获取value，而不是通过索引获取value
    HashTable.prototype.get = function (key) {
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];
        if (bucket == null) return null;
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                return tuple[1];
            }
        }
        return null;
    }
    HashTable.prototype.remove = function (key) {
        let index = this.hashFunc(key, this.limit);
        let bucket = this.storage[index];
        if (bucket == null) return null;
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] = key) {
                bucket.splice(i, 1);
                this.count--;
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    this.resize(this.getPrime(Math.floor(this.limit / 2)));
                }
                return tuple[1];
            }
        }
        return null;
    }
    HashTable.prototype.isEmpty = function () {
        return this.count == 0;
    }
    HashTable.prototype.size = function () {
        return this.count;
    }
    // 哈希表扩容
    HashTable.prototype.resize = function (newLimit) {
        let oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        for (let i = 0; i < oldStorage.length; i++) {
            let bucket = oldStorage[i];
            if (bucket == null) {
                continue;
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j];
                this.put(tuple[0], tuple[1]);
            }
        }
    }
    HashTable.prototype.isPrime = function (num) {
        let temp = parseInt(Math.sqrt(num));
        for (let i = 2; i <= temp; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    HashTable.prototype.getPrime = function (num) {
        while (!this.isPrime(num)) {
            num++;
        }
        return num;
    }
}
