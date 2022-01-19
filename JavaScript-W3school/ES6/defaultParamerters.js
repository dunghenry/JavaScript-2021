function congHaiSo(x, y){
    if(y === undefined){
        y = 2
    }
    return x + y
}
const tHS = congHaiSo(7)
const THS = congHaiSo(4,5)
console.log(tHS)
console.log(THS)

const CHS = (x, y = 2) => x + y
const CHSOne = CHS(7)
console.log(CHSOne)

const NHS = (x, y = 5) => x * y
console.log(NHS(2, 3))
console.log(NHS(2))
