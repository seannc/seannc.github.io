var display = document.getElementById("display")
var bginp = document.getElementById("bgtext")
var menu = document.getElementById("menu")

var inpr = document.getElementById("red")
var inpg = document.getElementById("green")
var inpb = document.getElementById("blue")

var ranr = document.getElementById("rred")
var rang = document.getElementById("rgreen")
var ranb = document.getElementById("rblue")

var colourinp = document.getElementById("colourinp")

var curelement = display;

menu.addEventListener("click", function(){
    curelement = menu;
});

display.addEventListener("click", function(){
    curelement = display;
});

/*bginp.addEventListener("click", function(){
    curelement = bginp;
});*/

document.getElementById("change").addEventListener("click", function (){
    console.log(bginp.value);
    
    curelement.style.backgroundColor = bginp.value;
    bginp.value = "";
});

inpr.addEventListener("change", function(){
    curelement.style.backgroundColor = "rgb("+inpr.value+", "+inpg.value+", "+inpb.value+")";
    ranr.value = inpr.value;
});
inpg.addEventListener("change", function(){
    curelement.style.backgroundColor = "rgb("+inpr.value+", "+inpg.value+", "+inpb.value+")";
    rang.value = inpg.value;
});
inpb.addEventListener("change", function(){
    curelement.style.backgroundColor = "rgb("+inpr.value+", "+inpg.value+", "+inpb.value+")";
    ranb.value = inpb.value;
});

ranr.addEventListener("change", function(){
    curelement.style.backgroundColor = "rgb("+ranr.value+", "+rang.value+", "+ranb.value+")";
    inpr.value = ranr.value;
});
rang.addEventListener("change", function(){
    curelement.style.backgroundColor = "rgb("+ranr.value+", "+rang.value+", "+ranb.value+")";
    inpg.value = rang.value;
});
ranb.addEventListener("change", function(){
    curelement.style.backgroundColor = "rgb("+ranr.value+", "+rang.value+", "+ranb.value+")";
    inpb.value = ranb.value;
});

colourinp.addEventListener("change", function(){
    curelement.style.backgroundColor = colourinp.value;
});
