// document.addEventListener("DOMContentLoaded",function(){

//     var nut = document.getElementById('nut');
//     var to = document.getElementsByClassName('to');
//     var to = to[0];
//     console.log(to);

//     nut.onclick = function(){
//         console.log("Click");
//         to.classList.add('')
//     }
// },false)

// Cách 2:
var to = document.getElementsByClassName('to');
var to = to[0];
var nut = document.getElementById('nut');

nut.addEventListener('click',function(){
    // console.log("Bạn vừa click");
    to.classList.toggle('quayX')
})


