var arr =['孙悟空','猪八戒','沙和尚','蜘蛛精','二郎神']
// 像这种函数，由我们创建不由我们调用，我们称为回调函数
// 数组中有几个元素就会执行几次
// 浏览器会在回调函数中传入三个参数
arr.forEach(function(value,index,arr){
    console.log(value,index,arr);
});

