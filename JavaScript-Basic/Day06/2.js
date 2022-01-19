var mangdl = [
    {
        id: 1,
        anh: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_05_04_65_29090374/914dfb7ad93830666929.jpg.webp",
        ten: "Hi",
        noidung: "Noi dung 1"
    },
    {
        id: 2,
        anh: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_05_04_15_38725067/6b4cd35cf11e1840410f.jpg.webp",
        ten: "Hello",
        noidung: "Noi dung2"
    }
]
console.log(mangdl);
console.log(mangdl[0].anh),
console.log(mangdl[0]['noidung']);

for(var i = 0; i < mangdl.length;i++){
    console.log(mangdl[i].anh);
}

for(var i = 0; i < mangdl.length;i++){
    var noidungkhoi1 = `
    <div class="box" id="box1-${mangdl[i].id}">
    <img src="${mangdl[i].anh}" alt="">
    <span>${mangdl[i].noidung}</span>
    </div> `
    var phantumoi = document.createElement('div');

    phantumoi.innerHTML = noidungkhoi1;

    var bo = document.getElementById('box1');
    bo.appendChild(phantumoi);
}

