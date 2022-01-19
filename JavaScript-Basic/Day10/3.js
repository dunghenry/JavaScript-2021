document.addEventListener("DOMContentLoaded", function(){
    var click = document.getElementsByClassName('click');
    var nd = document.getElementsByClassName('hienthi');
    for(let i = 0; i < click.length; i++) {
        click[i].onclick = function(){
            console.log(this.classList);

            if(this.classList[1] == 'mautrang'){
                this.classList.remove('mautrang');
            var ndhienthi = this.getAttribute('data-thongbao');
            var khoihienthi = document.getElementById(ndhienthi);
            khoihienthi.classList.remove('hienlen');
            }
            else{   
                    for(let j = 0; j < click.length; j++) {
                        click[j].classList.remove('mautrang');
                }
                this.classList.toggle('mautrang');
                var ndhienthi = this.getAttribute('data-thongbao');
                var khoihienthi = document.getElementById(ndhienthi);

                for(let i = 0; i < nd.length; i++) {
                    nd[i].classList.remove('hienlen');    
                }
                khoihienthi.classList.toggle('hienlen');
            }
        }
    }
  
},false)