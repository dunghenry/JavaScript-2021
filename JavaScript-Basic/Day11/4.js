document.addEventListener("DOMContentLoaded",function(){
    var trangthai = 'duoi100';
    var menu = document.querySelector('.menu');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>100){
            if(trangthai == 'duoi100'){
                trangthai = 'tren100';
                menu.classList.add('thaydoimenu');
                left.classList.add('thaydoileft');
                right.classList.add('thaydoiright');
            }
        }
        else if(window.pageYOffset <= 100){
            if(trangthai == 'tren100'){
                trangthai = 'duoi100';
                menu.classList.remove('thaydoimenu');
                left.classList.remove('thaydoileft');
                right.classList.remove('thaydoiright');
            }
        }
    })
},false)