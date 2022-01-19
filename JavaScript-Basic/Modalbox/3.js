document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementById('open');
    console.log(nut);
    var khoihienthi = document.getElementsByClassName('khoihienthi');
    var khoihienthi = khoihienthi[0];
    console.log(khoihienthi);
    var close = document.getElementById('close');

    nut.onclick = function(){
        console.log("Bạn vua click");
        khoihienthi.style.display = "block";
    }
    close.onclick = function(){
        khoihienthi.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == khoihienthi)
        {
            khoihienthi.style.display = "none";
        }
    }
},false)