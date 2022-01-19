$(function(){
    $("button").click(function(){
        $("h1").load("demo.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt=="success")
            alert("External content loaded successfully!");
        if(statusTxt=="error")
            alert("Error: "+ xhr.status +":"+ xhr.statusText);
        })
    })
})