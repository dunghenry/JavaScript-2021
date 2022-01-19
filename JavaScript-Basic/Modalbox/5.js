var nut = document.querySelector('.nut');
var den = document.querySelector('.den');
var close = document.querySelector('#close');
var text = document.querySelector('.text');
console.log(nut);
console.log(den);
console.log(close);

nut.addEventListener('click', function(){
    console.log('click')
    den.classList.add('hienthi');
    text.classList.add('hienlen');
})
den.addEventListener('click', function(){
    console.log('click')
    den.classList.remove('hienthi');
    text.classList.remove('hienlen');
})
close.addEventListener('click', function(){
    console.log('click')
    den.classList.remove('hienthi');
    text.classList.remove('hienlen');
})
