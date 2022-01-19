function vd1(){
    var ten = "Dũng";
    console.log("Hello "+ ten);
}
vd1();

var ten = "zing";
function vd2(ten){
    console.log("Đi chơi không " + ten);
}
vd2("Dũng");
vd2(ten);


function tbc(ten,a, b, c, d, e){
    console.log("Hello "+ ten);
    console.log("Trung bình cộng của 5 số là: " + (a+b+c+d+e)/5);
}
tbc("Dũng",1, 2, 3, 4, 5);
