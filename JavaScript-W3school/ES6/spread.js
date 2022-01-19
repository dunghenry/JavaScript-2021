const buaAn = {
    buaSAng: 'Xôi',
    buaToi: 'Cơm'
}
const buaAn1 = {...buaAn, buaChieu: 'Chè'}
console.log(buaAn1)
const buaAn2 = {...buaAn, buaSAng: 'Bún', buaToi: 'Phở', buaChieu: 'Cháo'}
console.log(buaAn2)

const tapHopSo = [1, 2, 3]
const tapHopSo1 = [...tapHopSo, 4]
console.log(tapHopSo1)

const sinhVien = {
    ten: 'Dũng',
    nam: [1, 2, 3]
}
const svSapTotNghiep = {...sinhVien, nam: 4, sapTotNghiep: true}
console.log(svSapTotNghiep)
