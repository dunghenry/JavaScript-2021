document.addEventListener("DOMContentLoaded",function(){
    // code ở đây
    var x = document.getElementById('n1');
    console.log(x);
    x.onclick = function(){
        console.log("Bạn vừa click vào nút 1" + x);
        x.classList.add('n2');
        // Thêm clsaa n2 vào dòng có id=n1
    }

},false)