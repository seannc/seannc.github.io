var playcap = document.getElementById("playcap")
var studycap = document.getElementById("studycap")
var tutorialcap = document.getElementById("tutorialcap")

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

//PICK YOUR GAME
var europeop = document.getElementById("europe"),
    europebuttons = document.getElementById("europebuttons"),
    eurobg = document.getElementById("eurobg")

var asiaop = document.getElementById("asia"),
    asiabuttons = document.getElementById("asiabuttons"),
    asiabg = document.getElementById("asiabg")

europeop.addEventListener("mouseover", function(){
    europebuttons.style.visibility = "visible";
    europebuttons.style.opacity = 1;
    eurobg.style.filter = "blur(5px)";
});

europeop.addEventListener("mouseout", function(){
    europebuttons.style.visibility = "hidden";
    europebuttons.style.opacity = 0;
    eurobg.style.filter = "none";
});

asiaop.addEventListener("mouseover", function(){
    asiabuttons.style.visibility = "visible";
    asiabuttons.style.opacity = 1;
    asiabg.style.filter = "blur(5px)";
});

asiaop.addEventListener("mouseout", function(){
    asiabuttons.style.visibility = "hidden";
    asiabuttons.style.opacity = 0;
    asiabg.style.filter = "none";
});
