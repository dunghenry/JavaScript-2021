const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f.next().value);//[0, Banana]
console.log(f.next().value);//[1, Orange]
for (let x of f) {
    console.log(x[0], x[1])
}
//x là arr x[0]=index số x[1]=value

//Syntax
entries();