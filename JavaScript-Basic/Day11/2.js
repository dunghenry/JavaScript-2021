document.addEventListener("DOMContentLoaded",function(){

    var doituongmenu = document.querySelector('.menu');
    phai = document.querySelector('.phai');

    var trangthai = 'duoi100';
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>100){
            if(trangthai == 'duoi100'){
                console.log("Ok");
                trangthai = 'tren100';
                doituongmenu.classList.add('nholai');
                phai.classList.add('benphai');
            }
            
        }
        else if(window.pageYOffset <= 100){
            if(trangthai == 'tren100'){
                doituongmenu.classList.remove('nholai');
                phai.classList.remove('benphai');
                trangthai = 'duoi100';
            }
        }
    })

},false)