// 设计哈希函数
// 1、将字符串转成比较大的数字：hashCode  2、将大的数字hashCode压缩到数组范围之内
function hashFunc(str, size) {
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

console.log(hashFunc('abc', 7));
console.log(hashFunc('cba', 7));
console.log(hashFunc('nba', 7));
console.log(hashFunc('mba', 7));
