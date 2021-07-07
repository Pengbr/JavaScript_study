function defaultToString(item) {
    if (item === null) {
        return 'null'
    } else if (item === undefined) {
        return 'undefined'
    } else if (typeof item === "string" || item instanceof String) {
        return `${item}`
    } else {
        return item.toString()
    }
}

class Dictionary {
    // 函数作为构造器函数的参数
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        // 基于对象的数据结构
        this.table = {}
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null
    }

    set(key, value) {
        if (key != null && value != null) {
            this.table[this.toStrFn(key)] = `[${key}:${value}]`
            return true
        }
        return false
    }
}
