var todiv = document.getElementById("to"),
    fromdiv = document.getElementById("from"),
    messagediv = document.getElementById("message"),
    bgdiv = document.getElementById("postcard"),
    preview = document.getElementById("preview")

var toinp = document.getElementById("toinp"),
    frominp = document.getElementById("frominp"),
    messageinp = document.getElementById("messageinp"),
    bginp = document.getElementById("bginp")

var add = document.getElementById("add"),
    save = document.getElementById("save"),
    load = document.getElementById("load")

var cardarr = []

var autonum = 1

toinp.addEventListener("keyup", function(){
    todiv.innerHTML = toinp.value;
});

frominp.addEventListener("keyup", function(){
    fromdiv.innerHTML = frominp.value;
});

messageinp.addEventListener("keyup", function(){
    messagediv.innerHTML = messageinp.value;
});

bginp.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        if(bginp.value == ""){
            bgdiv.style.backgroundImage = "url(imgs/default.png)";
        } else if(bginp.value == "auto"){
            bgdiv.style.backgroundImage = "url(imgs/auto"+autonum+".jpg)";
            autonum++;
            if(autonum >= 4){autonum = 1;}
        } else {
            bgdiv.style.backgroundImage = "url("+bginp.value+")";
        }
    }
});

function createPostcard(to, bgImg, from, msg){
    var newimg = document.createElement("div"),
        newcap = document.createElement("div")
    
    newimg.className = "newimg";
    newimg.style.backgroundImage = bgImg.style.backgroundImage;
    
    newcap.className = "newcap";
    newcap.innerHTML = to.value;
    
    preview.appendChild(newimg);
    newimg.appendChild(newcap);
    
    var obj = {
        bgimg:newimg.style.backgroundImage,
        to:to.value,
        message:messageinp.value,
        from:frominp.value
    }
    
    cardarr.push(obj);
    console.log(cardarr);
    
    newimg.addEventListener("click", function(){
        todiv.innerHTML = obj.to;
        msg.innerHTML = obj.message;
        from.innerHTML = obj.from;
        bgImg.style.backgroundImage = obj.bgimg;
    });
}

add.addEventListener("click", function(){
    createPostcard(toinp, bgdiv, fromdiv, messagediv);
});

save.addEventListener("click", function(){
    localStorage.setItem("cardstore", JSON.stringify(cardarr));
});

load.addEventListener("click", function(){
    var cards = localStorage.getItem("cardstore")
    
    preview.innerHTML = "";

    if(cards){
        cards = JSON.parse(cards);
        for(var i=0; i<cards.length; i++){
            createcard(cards[i]);
        }
    }
});

function createcard(curitem){
    var newimg = document.createElement("div"),
        newcap = document.createElement("div")
    
    newimg.className = "newimg";
    newimg.style.backgroundImage = curitem.bgimg;
    
    newcap.className = "newcap";
    newcap.innerHTML = curitem.to;
    
    preview.appendChild(newimg);
    newimg.appendChild(newcap);
    
    newimg.addEventListener("click", function(){
        todiv.innerHTML = curitem.to;
        messagediv.innerHTML = curitem.message;
        fromdiv.innerHTML = curitem.from;
        bgdiv.style.backgroundImage = curitem.bgimg;
    });
}