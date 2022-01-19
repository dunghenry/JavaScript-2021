// !Do-while

// var i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i < -1);

// !Bao giờ cũng chạy một lần nếu như điều kiện sai
var i = 0;
var isSuccess = false;
do{
    i++;
    console.log("Nạp thẻ lần:" + i);

    if(true){
        isSuccess = true;
    }
}while(!isSuccess && i <= 3);
