document.addEventListener("DOMContentLoaded",function(){
    // code ở đây
    var x = document.getElementById('n1');
    console.log(x);

    var y = document.getElementsByClassName('card');
    console.log(y[0]);
    
    x.onclick = function(){
        console.log("Bạn vừa click vào nút 1" + x);


        y[0].classList.toggle('n2');
        // Têm class n2 vào dòng đầu tiên có class=card nếu như dòng có class=card chưa có class=n2;
    }
},false)