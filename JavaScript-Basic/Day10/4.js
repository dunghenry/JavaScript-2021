document.addEventListener("DOMContentLoaded", function(){
    var click = document.getElementsByClassName('click');
    var hienthi = document.getElementsByClassName('hienthi');
    for (let i = 0; i < click.length; i++) {
       click[i].onclick = function(){
            if(this.classList[1] == 'mautrang'){
                this.classList.remove('mautrang');
                var ndhienthi = this.getAttribute('data-thongbao');
                var khoihienthi = document.getElementById(ndhienthi);
                khoihienthi.classList.remove('ra');
            }
            else{
                for (let j = 0; j < click.length; j++) {
                    click[j].classList.remove('mautrang');
                }
                this.classList.toggle('mautrang');
                var ndhienthi = this.getAttribute('data-thongbao');
                var khoihienthi = document.getElementById(ndhienthi);
                for (let i = 0; i < hienthi.length; i++) {
                    hienthi[i].classList.remove('ra');   
                }
                khoihienthi.classList.toggle('ra');
            }

        // for (let j = 0; j < click.length; j++) {
        //    click[j].classList.remove('mautrang');
        // }
        // this.classList.toggle('mautrang');
        // var ndhienthi = this.getAttribute('data-thongbao');
        // var khoihienthi = document.getElementById(ndhienthi);
        // for (let i = 0; i < hienthi.length; i++) {
        //     hienthi[i].classList.remove('ra');   
        // }
        // khoihienthi.classList.toggle('ra');
       }    
    }
}, false)