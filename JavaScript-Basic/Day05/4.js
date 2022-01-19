var monan = {
    tenmonan : "Thịt kho tàu",
    nguyenlieu : "thịt lợn",
    gia : 200
}

var monan2 = monan;
monan2.tenmonan = "miến lươn";
//Sử dụng chung ô nhớ nên tên món ăn 2 thay đổi thì tên món ăn cx thay đổi theo
console.log(monan2);
console.log(monan);


var monan1 = {
    tenmonan : "Bò cuốn lá lốt",
    nguyenlieu : "thịt lợn",
    gia : 200
}

monan1.tenmonan = "Cá kho";
//đổi tên món ăn 1 thành cá kho
console.log(monan1);

console.log(monan2.tenmonan);
// lấy ra thong tin của từng đối tượg

//Khai báo constructor
function MONAN(t, nl, g){
    this.ten = t;
    this.nguyenlieu = nl;
    this.gia = g;
}
var mon1 = new MONAN("Rau xào", "Rau muống", 200);
var mon2 = new MONAN("Đậu rán", "Đậu phụ", 1000);
console.log(mon1);
console.log(mon2);

// const dùng để quy định giá trị ko thay đổi thường thì tên đc viết theo quy tắc ngầm là in hoa
const NHAN_SU = 20;
console.log(NHAN_SU);
