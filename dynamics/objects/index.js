//var person = {
//    name:"Jeff",
//    age:21,
//    job:"Cop"
//};
//
//console.log(person);
//console.log(window);
//
//window.location.href = "http://google.com";

var imgurl = document.getElementById("imgurl"),
    imgtitle = document.getElementById("imgtitle"),
    store = document.getElementById("store"),
    display = document.getElementById("display"),
    showlast = document.getElementById("showlast"),
    galiimg = document.getElementById("galimg"),
    galtitle = document.getElementById("galtitle"),
    items = []
    //lastimg = null,
    //lasttitle = null
    /*lastitem = {
        img:null,
        title:null
    }*/

store.addEventListener("click", function(){
    var newdiv = document.createElement("div");
    newdiv.className = "newimg";
    newdiv.style.backgroundImage = "url("+imgurl.value+")";
    
    display.appendChild(newdiv);
    //lastitem.img = imgurl.value;
    //lastitem.title = imgtitle.value;
    
    //localStorage.setItem("mylast", JSON.stringify(lastitem));
    
    var myitem = {
        img:imgurl.value,
        title:imgtitle.value
    };
    
    items.push(myitem);
    console.log(items);
    
    localStorage.setItem("myitems", JSON.stringify(items));
});

showlast.addEventListener("click", function(){
    //galimg.src = lastitem.img;
    //galtitle.innerHTML = lastitem.title;
});