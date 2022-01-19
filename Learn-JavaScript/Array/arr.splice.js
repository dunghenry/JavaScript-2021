const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
//Chèn vào vị trí thứ 1 xóa 0 phần tử và thêm vào Feb
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
//Xóa phần tử thứ 4 và thay vào đó là May
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//Syntax
splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item1);
splice(start, deleteCount, item1, item2, itemN);
