var x = document.querySelector('.card-title');
    console.log(x);

x.innerHTML = "Hello world";
//Lấy phần tử x đầu tiên
//Chỉ lấy đc phần tử đầu tiên

var y = document.querySelector('.group');
console.log(y);

var x = document.querySelector('#card-title');
console.log(x);

var y = document.querySelectorAll('.card-title');
console.log(y[0]);
// Trả về mảng và truy xuất cha con như css
//có thứ tự cha con như css

var z = document.querySelectorAll("[data-thongbao]");
console.log(z[0]);
// lấy ra dữ liệu data
// Trả về mảng 
