document.addEventListener("DOMContentLoaded", function(){
    var menu = document.getElementById('menu');
    var sticky = menu.offsetTop;
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= sticky){
            menu.classList.add('sticky');
        }
        else{
            menu.classList.remove('sticky');
        }
    })
}, false)
