var display = document.getElementById("display")

function make10Snows(){
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
}

function makeItSnow(){
    var snow = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10; //min 10 max 50
    
    snow.src = "snow.svg";
    snow.className = "snows";
    snow.style.left = mleft+"%";
    snow.style.width = mdim+"px";
    snow.style.height = mdim+"px";
    
    display.appendChild(snow);
    
    if(mdim > 40){
        snow.style.transition = "top 5s";
        snow.style.opacity = "0.9";
    } else if(mdim > 30){
        snow.style.transition = "top 6s";
        snow.style.opacity = "0.7";
    } else if(mdim > 20){
        snow.style.transition = "top 8s";
        snow.style.opacity = "0.5";
    } else {
        snow.style.transition = "top 10s";
        snow.style.opacity = "0.3";
    } 
    
    setTimeout(function(){
        snow.style.top = "150%";
        setTimeout(function(){
        display.removeChild(snow);
        }, 10000);
    }, 10);
}

var timer = null;
document.getElementById("start").addEventListener("click", function () {
    //document.getElementById("snow2").style.top = "100%";
    //document.getElementById("snow").style.top = "100%";
    
    timer = setInterval(make10Snows, 500);
});

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(timer);
});

document.getElementById("freq").addEventListener("change", function(){
   clearInterval(timer);
    var mnum = document.getElementById("freq").value;
    mnum = parseInt(mnum) * 100;
    var spd = 1100 - mnum;
    timer = setInterval(make10Snows, spd);
});