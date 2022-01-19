// json: number, bool, null, arr, obj
var json = '1';
json = 'false';
json = '["JS", "PHP", "C++"]';
json = '{"id": 1,"name": "Leanne Graham","username": "Bret","email": "Sincere@april.biz"}'

console.log(JSON.parse(json));//Chuyển json về js
var test = "1"
console.log((JSON.stringify(test)))//Chuyển từ js về json