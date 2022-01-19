document.addEventListener("DOMContentLoaded", function(){
    var click = document.getElementsByClassName('click');
    // console.log(click);
    var nd = document.getElementsByClassName('hienthi');

    for(var i = 0; i < click.length; i++){
        click[i].onclick = function(){
            console.log(this.classList);
            if(this.classList[1] == 'mautrang'){
                this.classList.remove('mautrang');
            var ndhienra = this.getAttribute('data-hienlen');
            var ndthienthi = document.getElementById(ndhienra);
            
            ndthienthi.classList.remove('ra');
            }
            else{
                    for(let j = 0; j < click.length; j++){
                        click[j].classList.remove('mautrang');
                }
                this.classList.toggle('mautrang');

                var ndhienra = this.getAttribute('data-hienlen');
                var ndthienthi = document.getElementById(ndhienra);
                for (let i = 0; i < nd.length; i++) {
                    nd[i].classList.remove('ra');  
                }
                ndthienthi.classList.toggle('ra');

            }
            // for (let j = 0; j < click.length; j++){
            //   click[j].classList.remove('mautrang');
            // }
            // this.classList.toggle('mautrang');
            // // console.log(this.getAttribute('data-hienlen'));

            // var ndhienra = this.getAttribute('data-hienlen');
            // var ndthienthi = document.getElementById(ndhienra);
            // // console.log(ndthienthi);
            
            // for (let i = 0; i < nd.length; i++) {
            //     nd[i].classList.remove('ra');  
            // }
            // ndthienthi.classList.toggle('ra');

        }
    }
}, false)