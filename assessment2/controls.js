var color = document.getElementById("color");
var hairinp = document.getElementById("hairinp");
var eyesinp = document.getElementById("eyesinp");
var noseinp = document.getElementById("noseinp");
var mouthinp = document.getElementById("mouthinp");
var display = document.getElementById("display");

color.addEventListener("change", function(){
   document.getElementById("preview").style.backgroundColor = color.value;
});

function changeType(type){
    hairinp.type = type;
    eyesinp.type = type;
    noseinp.type = type;
    mouthinp.type = type;
}

document.getElementById("number").addEventListener("click", function(){
 changeType("number");
});

document.getElementById("range").addEventListener("click", function(){
   changeType("range");
});

hairinp.addEventListener("change", function(){
   hair.style.width = hairinp.value+"%"; 
});
eyesinp.addEventListener("change", function(){
   eyes.style.width = eyesinp.value+"%"; 
});
noseinp.addEventListener("change", function(){
   nose.style.width = noseinp.value+"%"; 
});
mouthinp.addEventListener("change", function(){
   mouth.style.width = mouthinp.value+"%"; 
});

function createFace(){
    var copy = document.createElement("div");
    copy.style.width = "100px";
    copy.style.height = "100px";
    copy.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    copy.style.position = "relative";
    
    display.appendChild(copy);
    var copyhair = document.createElement("img");
    copy.appendChild(copyhair);
    copyhair.src = hair.src;
    copyhair.style.margin = "auto";
    copyhair.style.width = hair.style.width;
    copyhair.style.top = hair.style.top;
    copyhair.className = "items";
    
    var copyeyes = document.createElement("img");
    copy.appendChild(copyeyes);
    copyeyes.src = eyes.src;
    copyeyes.style.margin = "auto";
    copyeyes.style.width = eyes.style.width;
    copyeyes.style.top = eyes.style.top;
    copyeyes.className = "items";
    
    var copynose = document.createElement("img");
    copy.appendChild(copynose);
    copynose.src = nose.src;
    copynose.style.margin = "auto";
    copynose.style.width = nose.style.width;
    copynose.style.top = nose.style.top;
    copynose.className = "items";
    
    var copymouth = document.createElement("img");
    copy.appendChild(copymouth);
    copymouth.src = mouth.src;
    copymouth.style.margin = "auto";
    copymouth.style.width = mouth.style.width;
    copymouth.style.top = mouth.style.top;
    copymouth.className = "items";
    
    copy.addEventListener("click", function(){
        copy.style.display = "none";
    });
};

document.getElementById("plus").addEventListener("click", function(){
   createFace();
});

function randomFace(){
    var randomhair = Math.round(Math.random()*2)+1;
    var randomeyes = Math.round(Math.random()*2)+1;
    var randomnose = Math.round(Math.random()*2)+1;
    var randommouth = Math.round(Math.random()*2)+1;
    var red = Math.round(Math.random()*255)
    var blue = Math.round(Math.random()*255)
    var green = Math.round(Math.random()*255)
    var rshair = Math.round(Math.random()*70);
    var rseyes = Math.round(Math.random()*40);
    var rsnose = Math.round(Math.random()*30);
    var rsmouth = Math.round(Math.random()*35);
    hair.src = "img/hair"+randomhair+".png";
    eyes.src = "img/eyes"+randomeyes+".png";
    nose.src = "img/nose"+randomnose+".png";
    mouth.src = "img/mouth"+randommouth+".png";
    preview.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
    hair.style.width = rshair+"%";
    eyes.style.width = rseyes+"%";
    nose.style.width = rsnose+"%";
    mouth.style.width = rsmouth+"%";
    
    hairinp.value = rshair;
    eyesinp.value = rseyes;
    noseinp.value = rsnose;
    mouthinp.value = rsmouth;
};

document.getElementById("random").addEventListener("click", function(){
    randomFace();
});

var createtimer = null;
var randomtimer = null;
document.getElementById("start").addEventListener("click", function () {
    createtimer = setInterval(createFace, 500);
    randomtimer = setInterval(randomFace, 500);
});

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(createtimer);
    clearInterval(randomtimer);
});