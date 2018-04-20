var playcap = document.getElementById("playcap")
var studycap = document.getElementById("studycap")

//NAV ANIMATIONS
document.getElementById("play").addEventListener("mouseover", function(){
    playcap.style.visibility = "visible";
    playcap.style.opacity = 1;
    playcap.style.marginTop = 0;
});

document.getElementById("play").addEventListener("mouseout", function(){
    playcap.style.visibility = "hidden";
    playcap.style.opacity = 0;
    playcap.style.marginTop = "-50px";
});

document.getElementById("study").addEventListener("mouseover", function(){
    studycap.style.visibility = "visible";
    studycap.style.opacity = 1;
    studycap.style.marginTop = 0;
});

document.getElementById("study").addEventListener("mouseout", function(){
    studycap.style.visibility = "hidden";
    studycap.style.opacity = 0;
    studycap.style.marginTop = "-50px";
});

