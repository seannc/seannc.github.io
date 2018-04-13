document.getElementById("open").addEventListener("click",function(){
    document.getElementById("control").style.left = "0px";
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("control").style.left = "-200px";
});

document.getElementById("bg1").addEventListener("click",function(){
    document.getElementById("background").style.backgroundImage = "url(img/spiderman.jpg)"
});

document.getElementById("bg2").addEventListener("click",function(){
    document.getElementById("background").style.backgroundImage = "url(img/ragnarok.jpg)"
});

document.getElementById("bg3").addEventListener("click",function(){
    document.getElementById("background").style.backgroundImage = "url(img/guardians.jpg)"
});

document.getElementById("bg4").addEventListener("click",function(){
    document.getElementById("background").style.backgroundImage = "url(img/infinitywar.jpg)"
});