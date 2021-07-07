// var sum=0;
// var count=0;
// for (var i=1;i<=100;i++){
//     if (i%7 == 0){
//         count+=1;
//         sum+=i;
//     }
// }
// console.log('sum=',sum,'count=',count);

// 打印水仙花数
for (var i=100;i<1000;i++){
    var gw=i%10;
    var sw=parseInt(i%100/10);
    var bw=parseInt(i/100);
    if (Math.pow(gw,3)+Math.pow(sw,3)+Math.pow(bw,3)==i){
        console.log(i);
    }
}