// Object trong JS

var emailKey = "email1";

var myInfor = {
    name: "Dũng Trần",
    age: 20,
    address: "Ninh Bình",
    [emailKey]: "tranvandungksnb@gmail.com",
    // Lấy biến khai báo từ bên ngoài Object
    getName: function(){
        return this.name;
        // !This ở đây là myInfor
    }
}
var myKey = "address";
// Tạo biến lưu address

// !Thêm key
myInfor["my-email"] = "trandungksnb00@gmail.com";

myInfor.email = "trandungksnb00@gmail.com";
// Thêm key mới

console.log(myInfor);
console.log(myInfor.address);
// Lấy ra address
console.log(myInfor['age']);
// Lấy ra age
console.log(myInfor[myKey]);

// Lấy ra khi tạo biến lưu giá trị của nó giống mảng đối tượng

// !Xóa key
delete myInfor.age;
// Xóa key = tuổi từ Object
console.log(myInfor);

console.log(myInfor.getName());
// TODO Function -->Phương thức(method)
// !Others --> Thuộc tính(property)
