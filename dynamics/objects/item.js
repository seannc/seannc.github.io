var allitems = localStorage.getItem("myitems")

if(allitems){
    allitems = JSON.parse(allitems);
    for(var i=0; i<allitems.length; i++){
        createthumb(allitems[i]);
    }
}

function createthumb(curitem){
    var newdiv = document.createElement("div");
    newdiv.className = "newimg";
    newdiv.style.backgroundImage = "url("+curitem.img+")";
    
    document.getElementById("display").appendChild(newdiv);
    
    newdiv.addEventListener("click", function(){
        console.log("clicking on item", curitem);
        document.getElementById("galimg").src = curitem.img;
        document.getElementById("galtitle").innerHTML = curitem.title;
        
        document.getElementById("gallery").style.display = "block";
    })
}