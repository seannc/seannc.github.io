var ava1 = document.getElementById("ava1");
var ava2 = document.getElementById("ava2"); 
var up = document.getElementById("up") ;
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right"); 
var plus = document.getElementById("plus") ;
var minus = document.getElementById("minus");
var mn = document.getElementById("mn");
var stepup = 200;
var stepleft = 0;
var stepright = 0;
var inc = 100;
var hatmove1 = 0;
var hatmove2 = 0;
var ringmove1 = 0;
var ringmove2 = 0;
var shirtmove1 = 0;
var shirtmove2 = 0;
var hatsize = 150;
var ringsize = 150;
var shirtsize = 150;
ava1.addEventListener("click", function(){
	document.getElementById("ava").src = "ava1.png";
});
ava2.addEventListener("click", function(){
	document.getElementById("ava").src = "ava2.png";
});
mn.addEventListener("click", function(){
	document.getElementById("menu").style.right = "0px";
});


up.addEventListener("click", function(){
	stepup = stepup - 7;
	document.getElementById("center").style.top = stepup+"px";
});
down.addEventListener("click", function(){
	stepup = stepup + 7;
	document.getElementById("center").style.top = stepup+"px";
});
left.addEventListener("click", function(){
	stepleft = stepleft + 7;
	document.getElementById("center").style.left = -stepleft+"px";
});
right.addEventListener("click", function(){
	stepright = stepright + 7;
	document.getElementById("center").style.right = -stepright+"px";
});
plus.addEventListener("click", function(){
	inc = inc + inc*0.01;
	document.getElementById("ava").style.height = inc+"%";
});
minus.addEventListener("click", function(){
	inc = inc - inc*0.01;
	document.getElementById("ava").style.height = inc+"%";
});


//4A
document.getElementById("ava").addEventListener("click", function(){
	document.getElementById('up').style.display = "none";
	document.getElementById('down').style.display = "none";
	document.getElementById('left').style.display = "none";
	document.getElementById('right').style.display = "none";
	document.getElementById('plus').style.display = "none";
	document.getElementById('minus').style.display = "none";
	document.getElementById('ava1').style.display = "none";
	document.getElementById('ava2').style.display = "none";
	document.getElementById('mn').style.display = "none";
});

document.getElementById("header").addEventListener("click", function(){
	document.getElementById('up').style.display = "block";
	document.getElementById('down').style.display = "block";
	document.getElementById('left').style.display = "block";
	document.getElementById('right').style.display = "block";
	document.getElementById('plus').style.display = "block";
	document.getElementById('minus').style.display = "block";
	document.getElementById('ava1').style.display = "block";
	document.getElementById('ava2').style.display = "block";
	document.getElementById('mn').style.display = "block";
});

//4B + 5
document.getElementById("hat1").addEventListener("click", function(){
	document.getElementById('hat').style.display = "block";
	document.getElementById('controlhat').style.display = "block";
	document.getElementById('controlshirt').style.display = "none";
	document.getElementById('controlring').style.display = "none";
});

document.getElementById("shirt1").addEventListener("click", function(){
	document.getElementById('shirt').style.display = "block";
	document.getElementById('controlhat').style.display = "none";
	document.getElementById('controlshirt').style.display = "block";
	document.getElementById('controlring').style.display = "none";
});
document.getElementById("ring1").addEventListener("click", function(){
	document.getElementById('ring').style.display = "block";
	document.getElementById('controlhat').style.display = "none";
	document.getElementById('controlshirt').style.display = "none";
	document.getElementById('controlring').style.display = "block";
});


//Quest 5

//HAT
document.getElementById('hatup').addEventListener("click", function(){
	hatmove1 = hatmove1 - 17;
	document.getElementById("hat").style.top = parseInt(300+hatmove1)+"px";
});
document.getElementById('hatdown').addEventListener("click", function(){
	hatmove1 = hatmove1 + 17;
	document.getElementById("hat").style.top = parseInt(300+hatmove1)+"px";
});
document.getElementById('hatleft').addEventListener("click", function(){
	hatmove2 = hatmove2 - 17;
	document.getElementById("hat").style.left = parseInt(300+hatmove2)+"px";
});
document.getElementById('hatright').addEventListener("click", function(){
	hatmove2 = hatmove2 + 17;
	document.getElementById("hat").style.left = parseInt(300+hatmove2)+"px";
});
document.getElementById('hatbig').addEventListener("click", function(){
	hatsize = hatsize + 10;
	document.getElementById("hat").style.height = hatsize+"px";
});
document.getElementById('hatsmall').addEventListener("click", function(){
	hatsize = hatsize - 10;
	document.getElementById("hat").style.height = hatsize+"px";
});

//Ring


document.getElementById('ringup').addEventListener("click", function(){
	ringmove1 = ringmove1 - 17;
	document.getElementById("ring").style.top = parseInt(700+ringmove1)+"px";
});
document.getElementById('ringdown').addEventListener("click", function(){
	ringmove1 = ringmove1 + 17;
	document.getElementById("ring").style.top = parseInt(700+ringmove1)+"px";
});
document.getElementById('ringleft').addEventListener("click", function(){
	ringmove2 = ringmove2 - 17;
	document.getElementById("ring").style.left = parseInt(300+ringmove2)+"px";
});
document.getElementById('ringright').addEventListener("click", function(){
	ringmove2 = ringmove2 + 17;
	document.getElementById("ring").style.left = parseInt(300+ringmove2)+"px";
});
document.getElementById('ringbig').addEventListener("click", function(){
	ringsize = ringsize + 10;
	document.getElementById("ring").style.height = ringsize+"px";
});
document.getElementById('ringsmall').addEventListener("click", function(){
	ringsize = ringsize - 10;
	document.getElementById("ring").style.height = ringsize+"px";
});

//Shirt

document.getElementById('shirtup').addEventListener("click", function(){
	shirtmove1 = shirtmove1 - 17;
	document.getElementById("shirt").style.top = parseInt(500+shirtmove1)+"px";
});
document.getElementById('shirtdown').addEventListener("click", function(){
	shirtmove1 = shirtmove1 + 17;
	document.getElementById("shirt").style.top = parseInt(500+shirtmove1)+"px";
});
document.getElementById('shirtleft').addEventListener("click", function(){
	shirtmove2 = shirtmove2 - 17;
	document.getElementById("shirt").style.left = parseInt(300+shirtmove2)+"px";
});
document.getElementById('shirtright').addEventListener("click", function(){
	shirtmove2 = shirtmove2 + 17;
	document.getElementById("shirt").style.left = parseInt(300+shirtmove2)+"px";
});
document.getElementById('shirtbig').addEventListener("click", function(){
	shirtsize = shirtsize + 10;
	document.getElementById("shirt").style.height = shirtsize+"px";
});
document.getElementById('shirtsmall').addEventListener("click", function(){
	shirtsize = shirtsize - 10;
	document.getElementById("shirt").style.height = shirtsize+"px";
});





//else {
//	step = 0;
//	document.getElementById("center").style.top = 200-step+"px";
//};
/*if(document.getElementById("center").style.top < 800)  {
	step = step + 7;
up.addEventListener("click", function(){
	document.getElementById("center").style.top = 200+step+"px";

}
else {
	step = 0;
	document.getElementById("center").style.top = 200+step+"px";
};

*/