const computedPropertyName = 'buaToi'
const buaAn = {
    buaSang: 'Xoi',
    buaTrua: 'Com',
    [computedPropertyName]: 'Chao'
}
console.log(buaAn)

const buaAnKhac = {
    buaSang: 'Xoi',
    buaTrua: 'Com',
    [computedPropertyName+ 'HomNay']: 'Chao'
}
console.log(buaAnKhac)

const ten = 'Ten'
const nguoi = {
    quocTich: 'Vietnam',
    [`hoVa${ten}`]: 'Tran Van Dung'
}
console.log(nguoi)

const nguoiKhac = {
    ...nguoi,
    hoVaTen: 'Tran Thi A',
    tuoi: 20
}
console.log(nguoiKhac)