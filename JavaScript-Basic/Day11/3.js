document.addEventListener("DOMContentLoaded",function(){
    var menu = document.querySelector('.menu');
    var trai = document.querySelector('.trai');
    var phai = document.querySelector('.phai');
    console.log(menu);
    console.log(trai);
    console.log(phai);
    var trangthai = 'duoi100';

    window.addEventListener('scroll',function(){
        if(window.pageYOffset > 100){
            if(trangthai == 'duoi100'){
                console.log("Ok")
                trangthai = 'tren100';
                menu.classList.add('thaydoi');
                trai.classList.add('nholai');
                phai.classList.add('thunho');
            }  
        }
        else if(window.pageYOffset <= 100){
            if(trangthai == 'tren100'){
                trangthai = 'duoi100';
                menu.classList.remove('thaydoi');
                trai.classList.remove('nholai');
                phai.classList.remove('thunho');
            }
        }
    })
},false)