// 创建Date对象
var d =new Date();
console.log(d);
var d2 =new Date('12/03/2016 11:10:30');
console.log(d2);

// 获取对象是几号
var date=d.getDate();
console.log(date);

// 表示当前日期是周几
var day=d.getDay();
console.log(day);

var month=d.getMonth();
console.log(month);

// getTime()获取时间戳(毫秒数)
var time=d.getTime();
console.log(time);

time=Date.now();
console.log(time);

var start=Date.now();
for (var i=0;i<100;i++){
    console.log(i);
}
var end=Date.now();
console.log('花费时间为：',end-start+'毫秒');
