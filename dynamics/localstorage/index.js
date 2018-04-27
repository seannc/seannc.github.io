var source = document.getElementById("source"),
    title = document.getElementById("title"),
    create = document.getElementById("create"),
    display = document.getElementById("display"),
    filterbird = document.getElementById("filterbird"),
    filterdog = document.getElementById("filterdog")

var titles = [],
    images = []

function createImage(imgSrc, imgTitle){
    var ndiv = document.createElement("div");
    var image = document.createElement("img");
    var ntitle = document.createElement("div");
    
    image.src = imgSrc;
    ntitle.innerHTML = imgTitle;
    
    ndiv.className = "items";
    image.className = "image";
    ntitle.className = "cap";
    
    display.appendChild(ndiv);
    ndiv.appendChild(image);
    ndiv.appendChild(ntitle);
}

create.addEventListener("click", function(){
    createImage(source.value, title.value);
    titles.push(title.value);
    images.push(source.value);
    
    console.log(titles, images);
    localStorage.setItem("MyTitles", JSON.stringify(titles));
    localStorage.setItem("MyImages", JSON.stringify(images));
});

document.getElementById("getsaves").addEventListener("click", function(){
    titles = localStorage.getItem("MyTitles");
    images = localStorage.getItem("MyImages");
    
    titles = JSON.parse(titles);
    images = JSON.parse(images);
    
    display.innerHTML = "";
    for(var i = 0; i<titles.length; i++){
        createImage(images[i], titles[i]);
    }
});

filterbird.addEventListener("click", function(){
    display.innerHTML = "";
    
    //var i=0 means starting at the first one
    //i<titles.length means continuing until the end
    //i++ means going one by one
    for(var i=0; i<titles.length; i++){
        //if(titles[i] == "bird"){
        //    createImage(images[i], titles[i]);
        //}
        
        if(titles[i].match(/bird/gi) != null){
            createImage(images[i], titles[i]);
        }
    }
});

filterdog.addEventListener("click", function(){
    display.innerHTML = "";
    
    for(var i=0; i<titles.length; i++){
        if(titles[i] == "dog"){
            createImage(images[i], titles[i]);
        }
    }
});