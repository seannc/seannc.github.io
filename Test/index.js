var ch1 = document.getElementById("ch1")
var ch2 = document.getElementById("ch2")
var ch3 = document.getElementById("ch3")
var zoom = document.getElementById("zoom")
var stepper = document.getElementById("stepper")
var wid = 100
var hei = 70

document.getElementById("bg1").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i1.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i2.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i3.jpg)"
});
document.getElementById("bg2").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)"
});
document.getElementById("bg3").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i7.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i8.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i9.jpg)"
});
document.getElementById("bg4").addEventListener("click",function(){
    document.getElementById("ch1").style.backgroundImage = "url(imgs/i10.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i11.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i12.jpg)"
});
document.getElementById("ch1").addEventListener("mouseenter",function(){
   document.getElementById("zoom").style.backgroundImage = ch1.style.backgroundImage
});
document.getElementById("ch2").addEventListener("mouseenter",function(){
   document.getElementById("zoom").style.backgroundImage = ch2.style.backgroundImage
});
document.getElementById("ch3").addEventListener("mouseenter",function(){
   document.getElementById("zoom").style.backgroundImage = ch3.style.backgroundImage
});
document.getElementById("makebg").addEventListener("click",function(){
   document.getElementById("bg").style.backgroundImage = zoom.style.backgroundImage 
});
document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("bg").style.backgroundImage = "none"
});
document.getElementById("hideapp").addEventListener("click",function(){
    document.getElementById("app1").style.display = "none"
});
document.getElementById("showapp").addEventListener("click",function(){
    document.getElementById("app1").style.display = "block"
});
zoom.addEventListener("click",function(){
    document.getElementById("zoomcontrols").style.display = "block"
});
document.getElementById("zoomin").addEventListener("click",function(){
    wid = wid + 10;
    hei = hei + 7;
    zoom.style.width = wid+"%";
    zoom.style.height = hei+"%";
    
    if (wid > 91 && hei > 64){
		wid = 91;
		hei = 64;
	zoom.style.width = 91 + "%";
	zoom.style.height = 64 + "%";
	}
});
document.getElementById("zoomout").addEventListener("click",function(){
    wid = wid - 10;
    hei = hei - 7;
    zoom.style.width = wid+"%";
    zoom.style.height = hei+"%";
    
    if (wid < 11 && hei < 8){
		wid = 11;
		hei = 8;
	zoom.style.width = 11 + "%";
	zoom.style.height = 8 + "%";
	}
});
if (stepper.value <= 12 || num.value >= 1)
	{stepper.addEventListener("change", function(){
	bg.style.backgroundImage = "url(./imgs/i"+stepper.value+".jpg)";
})
};
function warning() {	
    if (stepper.value > 12 || stepper.value < 1){
        alert("Doesn’t exist!")
    };
};
//I can't get this to work :(
document.getElementById("next").addEventListener("click", function(){
    if (ch1.style.backgroundImage == "url(imgs/i1.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i4.jpg)"
        ch2.style.backgroundImage = "url(imgs/i5.jpg)"
        ch3.style.backgroundImage = "url(imgs/i6.jpg)"
    } else if (ch1.style.backgroundImage == "url(imgs/i4.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i7.jpg)"
        ch2.style.backgroundImage = "url(imgs/i8.jpg)"
        ch3.style.backgroundImage = "url(imgs/i9.jpg)"
    } else if (ch1.style.backgroundImage == "url(imgs/i7.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i10.jpg)"
        ch2.style.backgroundImage = "url(imgs/i11.jpg)"
        ch3.style.backgroundImage = "url(imgs/i12.jpg)"
    } else if (ch1.style.backgroundImage == "url(imgs/i10.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i1.jpg)"
        ch2.style.backgroundImage = "url(imgs/i2.jpg)"
        ch3.style.backgroundImage = "url(imgs/i3.jpg)"
    }
}); 
document.getElementById("prev").addEventListener("click", function(){
    if (ch1.style.backgroundImage == "url(imgs/i1.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i10.jpg)"
        ch2.style.backgroundImage = "url(imgs/i11.jpg)"
        ch3.style.backgroundImage = "url(imgs/i12.jpg)"
    } else if (ch1.style.backgroundImage == "url(imgs/i4.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i1.jpg)"
        ch2.style.backgroundImage = "url(imgs/i2.jpg)"
        ch3.style.backgroundImage = "url(imgs/i3.jpg)"
    } else if (ch1.style.backgroundImage == "url(imgs/i7.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i4.jpg)"
        ch2.style.backgroundImage = "url(imgs/i5.jpg)"
        ch3.style.backgroundImage = "url(imgs/i6.jpg)"
    } else if (ch1.style.backgroundImage == "url(imgs/i10.jpg)") {
        ch1.style.backgroundImage = "url(imgs/i7.jpg)"
        ch2.style.backgroundImage = "url(imgs/i8.jpg)"
        ch3.style.backgroundImage = "url(imgs/i9.jpg)"
    }
}); 
/*if (ch1.style.backgroundImage = "url(imgs/i1.jpg)"){

    document.getElementById("next").addEventListener("click",function(){
        document.getElementById("ch1").style.backgroundImage = "url(imgs/i4.jpg)"
    document.getElementById("ch2").style.backgroundImage = "url(imgs/i5.jpg)"
    document.getElementById("ch3").style.backgroundImage = "url(imgs/i6.jpg)"
    });
};*/