var bgtext = document.getElementById("bgtext")
var preview = document.getElementById("preview")

var c1 = document.getElementById("choice1")
var c2 = document.getElementById("choice2")
var c3 = document.getElementById("choice3")

var pick = document.getElementById("pick")

var numuse = 0;

bgtext.addEventListener("keyup", function(ev){
    //console.log(ev.keyCode);
    
    if(ev.keyCode == 13){
    console.log(c1.checked, c2.checked, c3.checked);
    
    if(c1.checked){
        if(bgtext.value == "guardians"){
           document.body.style.backgroundImage = "url(imgs/1.jpg)"; 
        } else if(bgtext.value == "avengers"){
           document.body.style.backgroundImage = "url(imgs/2.jpg)"; 
        } else if(bgtext.value == "thor"){
           document.body.style.backgroundImage = "url(imgs/3.jpg)"; 
        } else if(bgtext.value == "spiderman"){
           document.body.style.backgroundImage = "url(imgs/4.jpg)"; 
        } else {
            document.body.style.backgroundColor = bgtext.value;
            document.body.style.backgroundImage = "";
        }
        
    } else if(c2.checked) {
        if(bgtext.value == "guardians"){
           preview.style.backgroundImage = "url(imgs/1.jpg)"; 
        } else if(bgtext.value == "avengers"){
           preview.style.backgroundImage = "url(imgs/2.jpg)"; 
        } else if(bgtext.value == "thor"){
           preview.style.backgroundImage = "url(imgs/3.jpg)"; 
        } else if(bgtext.value == "spiderman"){
           preview.style.backgroundImage = "url(imgs/4.jpg)"; 
        } else {
            preview.style.backgroundColor = bgtext.value;
            preview.style.backgroundImage = "";
        }
    } else if(c3.checked) {
        if(bgtext.value == "guardians"){
           menu.style.backgroundImage = "url(imgs/1.jpg)"; 
        } else if(bgtext.value == "avengers"){
           menu.style.backgroundImage = "url(imgs/2.jpg)"; 
        } else if(bgtext.value == "thor"){
           menu.style.backgroundImage = "url(imgs/3.jpg)"; 
        } else if(bgtext.value == "spiderman"){
           menu.style.backgroundImage = "url(imgs/4.jpg)"; 
        } else {
            menu.style.backgroundColor = bgtext.value;
            menu.style.backgroundImage = "";
        }
    } else {
        alert("Choose and option")
    }
        bgtext.value = "";
        
        numuse++;
        console.log(numuse);
        if(numuse > 5){
            //alert("You've reached the limit, Please pay to use more!")
            document.getElementById("display").innerHTML = "You've reached the limit, Please pay to use more!";
        }
    }
});

pick.addEventListener("change", function(){
    var picknum = parseInt(pick.value);
    
    if(picknum > 4){
        pick.value = 1;
    }
    
    if(picknum < 1){
        pick.value = 4;
    }
    
    preview.style.backgroundImage = "url(imgs/"+picknum+".jpg)";
});