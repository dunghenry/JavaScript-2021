document.addEventListener("DOMContentLoaded",function(){
    var x = document.getElementById('hieuung');
    var y = document.getElementById('dichuyen');

    // console.log(x);
    var trangthai = "lan1";
    x.onclick = function(){
        if(trangthai == "lan1"){
            console.log("Click lần 1");
            trangthai = "lan2";
            y.classList.remove('dungim');
            y.classList.add('chuyendong');
        }
        else  if(trangthai == "lan2"){
            console.log("Click lần 2");
            trangthai = "lan1";
            y.classList.remove('chuyendong');
        }
    }
},false)