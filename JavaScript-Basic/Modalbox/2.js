document.addEventListener("DOMContentLoaded",function(){

    var open = document.getElementById('open');

    var hienthi = document.getElementsByClassName('hienthi');

    var hienthi = hienthi[0];
    // console.log(hienthi);

    var close = document.getElementById('close');
    // console.log(close);

    

    // open.onclick = function(){
    //   hienthi.classList.add('show');
    // }

    // close.onclick = function(){
    //     hienthi.classList.remove('show');
    // }


    open.onclick = function(){
        hienthi.style.display = "block";
        console.log("vua click");
    }
    close.onclick = function(){
        hienthi.style.display = "none";
        console.log("click");
    }
    window.onclick = function(event) {
        if (event.target == hienthi) {
            hienthi.style.display = "none";
        }
    }
    
}, false)