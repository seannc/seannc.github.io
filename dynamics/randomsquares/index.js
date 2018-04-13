var num = 0
var display = document.getElementById("display");
document.getElementById("rand").addEventListener("mousemove", function(){
   document.getElementById("rand").style.backgroundColor = "#FED";
    
    var newran = document.createElement("div");
    display.appendChild(newran);
    
    newran.className = "boxes";
    newran.id = "box"+num;
    var red = Math.round(Math.random()*255);
    var blue = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*255);
    var high = Math.round(Math.random()*50)+50;
    var wide = Math.round(Math.random()*50)+20;
    newran.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
    newran.style.height = high+"px";
    newran.style.width = wide+"px";
    num++;
});
var incw = 100;
var inch = 100;
document.getElementById("inc").addEventListener("mousemove",function(){
    var newdiv = document.createElement("div");
    display.appendChild(newdiv);
    
    newdiv.className = "boxes";
    newdiv.style.width = incw+"px";
    newdiv.style.height = inch+"px";
    
    incw -= 10;
    inch -= 10;
    
    if (incw <= 0){
        incw = 100;
    }
    if (inch <= 0){
        inch = 100;
    }
});
document.getElementById("reset").addEventListener("click",function(){
    //display.innerHTML = "";
    document.body.removeChild(display);
    display = document.createElement("div");
    display.id = "display";
    document.body.appendChild(display);
});
document.getElementById("auto").addEventListener("click",function(){
    var spd = document.getElementById("speed").value;
    setInterval(function(){
        var newran = document.createElement("div");
    display.appendChild(newran);
    
    newran.className = "boxes";
    newran.id = "box"+num;
    var red = Math.round(Math.random()*255);
    var blue = Math.round(Math.random()*255);
    var green = Math.round(Math.random()*255);
    var high = Math.round(Math.random()*50)+50;
    var wide = Math.round(Math.random()*50)+20;
    newran.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
    newran.style.height = high+"px";
    newran.style.width = wide+"px";
    num++;
    window.scrollTo(0, document.body.scrollHeight);
    }, spd)
});