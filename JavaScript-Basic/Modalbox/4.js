document.addEventListener("DOMContentLoaded",function(){
    var click = document.querySelector('.open');

    var text = document.querySelector('.text');

    var den = document.querySelector('.den');
    var close = document.querySelector('.btn-block');
    console.log(click);
    console.log(text);
    console.log(den);

    click.onclick = function(){
        console.log('Bạn vừa click');
        den.classList.add('hienlen');
        text.classList.add('hienthi');
    }
    den.onclick = function(){
        den.classList.remove('hienlen');
        text.classList.remove('hienthi');
    }
    close.onclick = function(){
        console.log('vưa click');
        text.classList.remove('hienthi');
        den.classList.remove('hienlen');
    }
},false)