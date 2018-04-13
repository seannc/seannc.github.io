var groceries = []
var showlist = document.getElementById("showlist")
var input = document.getElementById("grocery")
var display = document.getElementById("display")

input.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
        groceries.push(input.value);
        console.log(groceries);
        input.value = "";
    }
});

showlist.addEventListener("click", function(){
    for(var i = 0; i<groceries.length; i++){
        display.innerHTML += "<h3>"+groceries[i]+"</h3>";
    }
});