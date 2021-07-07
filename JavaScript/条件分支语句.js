// 判断switch后面的条件表达式与case后面的是否全等
var num =1;
switch(num){
    case 1:
        console.log('一');
        break;
    case 2:
        console.log('二');
        break;
    case 3:
        console.log('三');
        break;
    default:
        console.log('哈哈');
        break;
}

var score = 80;
switch (true){
    case (score>60):
        console.log('合格');
        break
    case (score<60):
        console.log('不合格');
        break
    default:
        console.log('输入有误');
        break
}