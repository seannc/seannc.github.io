document.getElementById("nameson").addEventListener("click", function(){
  
    x=document.getElementsByClassName("title");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.opacity=1;    // Change the content
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
});

document.getElementById("brawl").addEventListener("click", function(){
  
    x=document.getElementsByClassName("icon");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].style.backgroundImage="url(grad.png)";    // Change the content
    x[i].style.border="black solid 2px";
    }
});