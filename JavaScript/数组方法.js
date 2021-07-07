var arr=['孙悟空','猪八戒','沙和尚','蜘蛛精','二郎神']
// slice()方法可以从数组中提取指定的元素
var result=arr.slice(0,2);
console.log(result);

// 第一个数字代表起始位置，第二个数字表示删除的个数
arr.splice(0,2);
console.log(arr);
console.log(arr.splice(0,1,'牛魔王'));

// 数组去重
var arr=[1,2,3,2,1,3,4,2,5];
for (var i=0;i<arr.length;i++) {
    // console.log(arr[i]);
    for (var j=i+1;j<arr.length;j++){
        if (arr[i]==arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr);


var arr=['孙悟空','猪八戒','沙和尚'];
var arr2=['白骨精','玉兔精','蜘蛛精'];
var arr3=['二郎神','太上老君','玉皇大帝']
var result=arr.concat(arr2,arr3,'牛魔王','铁扇公主');
console.log(result);

result=arr.join('@');
console.log(result);

arr.reverse();
console.log(arr);

arr=['b','d','e','a','c'];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);

arr=[5,4];
arr.sort(function(a,b){
    // console.log('a=',a);
    // console.log('b=',b);
    return a-b;
})
console.log(arr);
