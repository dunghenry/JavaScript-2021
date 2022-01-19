document.addEventListener("DOMContentLoaded",function(){
    var tamgiac = document.getElementsByClassName('tamgiac');

    var tamgiac = tamgiac[0];
    // console.log(tamgiac);
     
    var danhsach = document.getElementsByClassName('danhsach');
    var danhsach = danhsach[0];
    // console.log(danhsach);

    tamgiac.onclick = function(){
        console.log("bạn vua click");
        // this.style.color = 'white';
        this.classList.toggle('tamgiactrang');
        danhsach.classList.toggle('danhsachmoi');
    }

},false)