const buaAn = {
    buaSAng: 'Xôi',
    buaToi: 'Cơm'
}
const traiCay = ['Cam', 'Quýt', 'Mít', 'Dừa']
console.log(`Sáng nay tôi ăn ${buaAn.buaSAng} và ${traiCay[0]}`)

const {buaSAng, buaToi} = buaAn

console.log(`Sáng nay tôi ăn ${buaSAng}`)
const [Cam, Quýt, Mít, Dừa] = traiCay
console.log(`Quả đầu tiên là: ${Cam}`)

const sinhVien = {
    ten: "Dũng",
    tuoi: 20
}
const {ten, tuoi} = sinhVien
console.log(`Tên của tôi là:${ten}-${tuoi} tuổi.`)

