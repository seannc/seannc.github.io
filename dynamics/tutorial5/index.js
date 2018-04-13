var display = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgsrc = null,
    stickerinput = document.getElementById("stickerurl"),
    height = document.getElementById("stickerh"),
    stcursor = document.getElementById("cursor");

document.getElementById("bgcolour").addEventListener("change", function(){
    display.style.backgroundColor = this.value;
});

function changeImage(el){
    imgsrc = el.src;
    stcursor.src = imgsrc;
};

st1.addEventListener("click", function(){
    changeImage(this);
    
    //imgsrc = this.src;
    //stcursor.src = imgsrc;
});

st2.addEventListener("click", function(){
    changeImage(this);
    
    //imgsrc = this.src;
    //stcursor.src = imgsrc;
});

display.addEventListener("click", function(ev){
    var newimage = document.createElement("img");
    newimage.src = imgsrc;
    newimage.className = "displaysticker";
    display.appendChild(newimage);
    
    console.log(ev.pageX, ev.pageY);
    newimage.style.left = ev.pageX+"px";
    newimage.style.top = ev.pageY+"px";
    newimage.style.height = height.value+"px";
});

stickerinput.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        var newsticker = document.createElement("img");
        newsticker.src = stickerinput.value;
        newsticker.className = "sticker";
        document.getElementById("stickers").appendChild(newsticker);
        stickerinput.value = "";
        newsticker.addEventListener("click", function(){
            changeImage(this);
            
            //imgsrc = this.src;
            //stcursor.src = imgsrc;
        });
    }
});

display.addEventListener("mousemove", function(ev){
    stcursor.style.top = ev.pageY+"px";
    stcursor.style.left = ev.pageX+"px";
});