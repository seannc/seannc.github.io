var dispdiv = document.getElementById("display");
var imgnum = 1;
var hor = 50;
var ver = 50;

document.getElementById("next").addEventListener("click",function(){
    imgnum = imgnum+1;
    
    if(imgnum >= 5){
        imgnum = 1;
    }
    
    dispdiv.style.backgroundImage = "url(img/pan"+imgnum+".jpg)";
});

document.getElementById("prev").addEventListener("click",function(){
    imgnum = imgnum-1;
    
    if(imgnum <= 0){
        imgnum = 4;
    }
    
    dispdiv.style.backgroundImage = "url(img/pan"+imgnum+".jpg)";
});

document.getElementById("left").addEventListener("mousemove",function(){
    hor -= 1;
    dispdiv.style.backgroundPosition = hor+"% center";
});

document.getElementById("right").addEventListener("mousemove",function(){
    hor += 1;
    dispdiv.style.backgroundPosition = hor+"% center";
});

document.getElementById("top").addEventListener("mousemove",function(){
    ver -= 1;
    dispdiv.style.backgroundPosition = hor+"%" +ver+"%";
});

document.getElementById("bottom").addEventListener("mousemove",function(){
    ver += 1;
    dispdiv.style.backgroundPosition = hor+"%" +ver+"%";
});