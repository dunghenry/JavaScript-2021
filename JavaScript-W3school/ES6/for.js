const buaAn ={
    buaSang: 'Xoi',
    buaTrua: 'Bun',
    buaToi: 'Com'
}
for(let i in buaAn)
    console.log(i)
for(let i in buaAn) console.log(buaAn[i])
const numbers = [1, 2, 3, 4]
for(let i in numbers)
    console.log(i)
// In ra chi so
for(let i of numbers) console.log(i)
// For of ko chay đc đối tượng

const name = "Dung"
for(let kiTu of name) console.log(kiTu.toUpperCase())