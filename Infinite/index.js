document.getElementById("nameson").addEventListener("click", function(){
  
    x=document.getElementsByClassName("title");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.opacity=1;    // Change the content
    x[i].style.transform="translateY(0)";
    }
    
    x=document.getElementsByClassName("profile");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.transform="translateY(-5px)";    // Change the content
    }
});

document.getElementById("namesoff").addEventListener("click", function(){
  
    x=document.getElementsByClassName("title");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.opacity=0;    // Change the content
//    x[i].addEventListener("mouseover", function(){
//        this.style.opacity=1;
//    });
    }
    x=document.getElementsByClassName("profile");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.transform="translateY(0px)";    // Change the content
    }
    
//    c=document.getElementsByClassName("icon");
//    for(var o = 0; o < c.length; o++){
//        c[o].addEventListener("mouseover", function(){
//            .style.opacity = 1;
//        });
//    }
});

document.getElementById("colours").addEventListener("click", function(){
  
    x=document.getElementsByClassName("icon");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.backgroundImage="";    // Change the content
    x[i].style.border="";
    }
    
    document.getElementById("colours").style.display = "none";
    document.getElementById("brawl").style.display = "inline-block";
});

document.getElementById("brawl").addEventListener("click", function(){
  
    x=document.getElementsByClassName("icon");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.backgroundImage="url(grad.png)";    // Change the content
    x[i].style.border="black solid 2px";
    }
    
    document.getElementById("colours").style.display = "inline-block";
    document.getElementById("brawl").style.display = "none";
});

var sizer = document.getElementById("sizer")

sizer.addEventListener("change", function(){
    x=document.getElementsByClassName("icon");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.width=sizer.value+"px";
    x[i].style.height=sizer.value+"px";    // Change the content
    }
    
    x=document.getElementsByClassName("title");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.opacity=0;
    }
    x=document.getElementsByClassName("profile");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.transform="translateY(0px)";    // Change the content
    }
})

/*document.getElementById("headshots").addEventListener("click", function(){ 
    document.getElementById("thegallery").innerHTML = document.getElementById("thegallery").innerHTML.replace(/gallery/g, 'headshot');
    
    document.getElementById("portraits").style.display = "inline-block";
    document.getElementById("headshots").style.display = "none";
});

document.getElementById("portraits").addEventListener("click", function(){ 
    document.getElementById("thegallery").innerHTML = document.getElementById("thegallery").innerHTML.replace(/headshot/g, 'gallery');
    
    document.getElementById("headshots").style.display = "inline-block";
    document.getElementById("portraits").style.display = "none";
});*/

function dis(ch) {
    ch.style.display = "none";
}