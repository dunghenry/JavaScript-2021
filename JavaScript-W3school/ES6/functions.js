function sum(x, y){
    return x + y
}
console.log(sum(1, 3))
// ES5

const  print = () =>{
    console.log("Hello world")
}
print()

const congHaiSo = (a, b) =>{
    return a + b
}
const SUM = congHaiSo(10, 20)

console.log(SUM)
// ES6

const vietTen = (ten) =>{
    console.log(ten)
}
const VietTen = ten => console.log(ten)
vietTen("Dũng")
VietTen("Nam")

const nhanDoi = c =>{
    return c * 2
}
const NhanDoi = y => y * 2

const nDOne = nhanDoi(10)
const NDTwo = NhanDoi(20)
console.log(nDOne, NDTwo)

const CHS = (x, y) => x + y
console.log(CHS(2, 3))