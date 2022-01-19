var z = "Béo thế e";
var x = "Viêt";
var y = "31 tuoi";

var comment = "<div class='cm-2'>"+ z + "</div>";

var comment2 = `<div class='cm-2>
                <i>${x}</i>
                <br>
                <b>${y}</b>
                <h2 class='tieu de'>${z}</h2>
                </div>`;
console.log(comment2);
console.log(comment);

var a1 = function(){
    console.log("Hello ");
}
a1();

var a2 = () => {console.log("Hello ");}
a2();

var a3 = (x) => {console.log("Hello " + x);}
a3("Dũng");