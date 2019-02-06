var maple = document.getElementById("maple")
var greeting = document.getElementById("greeting")
var left = document.getElementById("left")
var right = document.getElementById("right")
var flagpole = document.getElementById("flagpole")
var flag = document.getElementById("flagup")
var mountie = document.getElementById("mountie")
var hat = document.getElementById("mountiehat")
var moose = document.getElementById("moose")
var moosehead = document.getElementById("moosehead")
var tree = document.getElementById("trunk")
var leaves = document.getElementById("tree")
var beaver = document.getElementById("beaver")
var tail = document.getElementById("beavertail")
var bigcloud = document.getElementById("bigcloud")
var mediumcloud = document.getElementById("mediumcloud")
var smallcloud = document.getElementById("smallcloud")
var sun = document.getElementById("sun")
var mountains = document.getElementById("mountains")
var grassone = document.getElementById("grassone")
var grasstwo = document.getElementById("grasstwo")
var grassthree = document.getElementById("grassthree")
var day = document.getElementById("day")
var moon = document.getElementById("moon")
var clock = document.getElementById("clock")
var minute = document.getElementById("minute")
var hour = document.getElementById("hour")
var door = document.getElementById("door")
var windows = document.getElementById("windows")
var roof = document.getElementById("roof")
var topflag = document.getElementById("topflagup")
var moosenoise = new Audio("moose.mp3")
var leafnoise = new Audio("leaf.mp3")
var ehnoise = new Audio("eh.mp3")
var slapnoise = new Audio("slap.mp3")
var lightnoise = new Audio("light.mp3")
var windnoise = new Audio("wind.mp3")
var tingnoise = new Audio("ting.mp3")

var bone = document.getElementById("bone")
var btwo = document.getElementById("btwo")
var bthree = document.getElementById("bthree")
var bfour = document.getElementById("bfour")
var bfive = document.getElementById("bfive")
var bsix = document.getElementById("bsix")
var bseven = document.getElementById("bseven")
var beight = document.getElementById("beight")
var bnine = document.getElementById("bnine")
var bten = document.getElementById("bten")
var fone = document.getElementById("factone")
var ftwo = document.getElementById("facttwo")
var fthree = document.getElementById("factthree")
var ffour = document.getElementById("factfour")
var ffive = document.getElementById("factfive")
var fsix = document.getElementById("factsix")
var fseven = document.getElementById("factseven")
var feight = document.getElementById("facteight")
var fnine = document.getElementById("factnine")
var ften = document.getElementById("factten")


maple.addEventListener("click", function () {
  maple.style.opacity = "0";
  greeting.style.opacity = "0";
  maple.style.visibility = "hidden";
  greeting.style.visibility = "hidden";
  right.style.transform = "translateX(500px)";
  left.style.transform = "translateX(-500px)";
});

flagpole.addEventListener("click", function () {
  btwo.style.opacity = "1";
  btwo.style.visibility = "visible";
  if (flag.style.transform == "translateY(0px)") {
    flag.style.transform = "translateY(400px)";
    flag.style.visibility = "hidden";
  } else {
    flag.style.transform = "translateY(0px)";
    flag.style.visibility = "visible";
  }
});

mountie.addEventListener("click", function () {
  bone.style.opacity = "1";
  bone.style.visibility = "visible";
  ehnoise.play();
  if (hat.style.transform == "rotate(30deg)") {
    hat.style.transform = "rotate(0deg)";
  } else {
    hat.style.transform = "rotate(30deg)";
  }
});

moose.addEventListener("click", function () {
  bfour.style.opacity = "1";
  bfour.style.visibility = "visible";
  moosenoise.play();
  if (moosehead.style.transform == "rotate(20deg)") {
    moosehead.style.transform = "rotate(0deg)";
  } else {
    moosehead.style.transform = "rotate(20deg)";
  }
});

tree.addEventListener("click", function () {
  leaves.classList.add("shakeclass");
  bthree.style.opacity = "1";
  bthree.style.visibility = "visible";
  leafnoise.play();
});

beaver.addEventListener("click", function () {
  tail.classList.add("slapclass");
  bfive.style.opacity = "1";
  bfive.style.visibility = "visible";
  slapnoise.play();
});

bigcloud.addEventListener("click", function () {
  bigcloud.style.transform = "translateX(400px)";
  windnoise.play()
});

mediumcloud.addEventListener("click", function () {
  mediumcloud.style.transform = "translateX(500px)";
  bsix.style.opacity = "1";
  bsix.style.visibility = "visible";
  windnoise.play()
});

smallcloud.addEventListener("click", function () {
  smallcloud.style.transform = "translateX(600px)";
  windnoise.play()
});

sun.addEventListener("click", function () {
  sun.style.opacity = "0";
  bigcloud.style.opacity = "0";
  mediumcloud.style.opacity = "0";
  smallcloud.style.opacity = "0";
  mountie.style.transform = "translateX(-400px)";
  hat.style.transform = "translateX(-400px)";
  day.style.opacity = "0";
  flag.style.transform = "translateX(-200px)";
  flagpole.style.transform = "translateX(-200px)";
  moose.style.transform = "translatey(500px)";
  moosehead.style.transform = "translatey(500px)";
  beaver.style.transform = "translateX(200px)";
  tail.style.transform = "translateX(200px)";
  tree.style.transform = "translatey(300px)";
  leaves.style.transform = "translateY(300px)";
  grassone.style.transform = "translatey(300px)";
  grasstwo.style.transform = "translatey(300px)";
  grassthree.style.transform = "translatey(300px)";
  mountains.style.opacity = "0";

  sun.style.visibility = "hidden";
  bigcloud.style.visibility = "hidden";
  mediumcloud.style.visibility = "hidden";
  smallcloud.style.visibility = "hidden";
  mountie.style.visibility = "hidden";
  hat.style.visibility = "hidden";
  day.style.visibility = "hidden";
  flag.style.visibility = "hidden";
  flagpole.style.visibility = "hidden";
  moose.style.visibility = "hidden";
  moosehead.style.visibility = "hidden";
  beaver.style.visibility = "hidden";
  tail.style.visibility = "hidden";
  tree.style.visibility = "hidden";
  leaves.style.visibility = "hidden";
  grassone.style.visibility = "hidden";
  grasstwo.style.visibility = "hidden";
  grassthree.style.visibility = "hidden";
  mountains.style.visibility = "hidden";
  door.style.opacity = "1";
  windows.style.opacity = "1";
});

moon.addEventListener("click", function () {
  sun.style.opacity = "1";
  bigcloud.style.opacity = "1";
  mediumcloud.style.opacity = "1";
  smallcloud.style.opacity = "1";
  mountie.style.transform = "translateX(0)";
  hat.style.transform = "translateX(0)";
  day.style.opacity = "1";
  flag.style.transform = "translateX(0)";
  flagpole.style.transform = "translateX(0)";
  moose.style.transform = "translatey(0)";
  moosehead.style.transform = "translatey(0)";
  beaver.style.transform = "translateX(0)";
  tail.style.transform = "translateX(0)";
  tree.style.transform = "translatey(0)";
  leaves.style.transform = "translateY(0)";
  grassone.style.transform = "translatey(0)";
  grasstwo.style.transform = "translatey(0)";
  grassthree.style.transform = "translatey(0)";
  mountains.style.opacity = "1";

  sun.style.visibility = "visible";
  bigcloud.style.visibility = "visible";
  mediumcloud.style.visibility = "visible";
  smallcloud.style.visibility = "visible";
  mountie.style.visibility = "visible";
  hat.style.visibility = "visible";
  day.style.visibility = "visible";
  flag.style.visibility = "visible";
  flagpole.style.visibility = "visible";
  moose.style.visibility = "visible";
  moosehead.style.visibility = "visible";
  beaver.style.visibility = "visible";
  tail.style.visibility = "visible";
  tree.style.visibility = "visible";
  leaves.style.visibility = "visible";
  grassone.style.visibility = "visible";
  grasstwo.style.visibility = "visible";
  grassthree.style.visibility = "visible";
  mountains.style.visibility = "visible";
});

door.addEventListener("click", function () {
  bseven.style.opacity = "1";
  bseven.style.visibility = "visible";
  lightnoise.play();

  if (door.style.opacity == "0") {
    door.style.opacity = "1";
    windows.style.opacity = "1";
  } else {
    door.style.opacity = "0";
    windows.style.opacity = "0";
  }
});

clock.addEventListener("click", function () {
  minute.style.transform = "rotate(3600deg)"
  hour.style.transform = "rotate(3600deg)"
  beight.style.opacity = "1";
  beight.style.visibility = "visible";
});

roof.addEventListener("click", function () {
  bnine.style.opacity = "1";
  bnine.style.visibility = "visible";

  if (topflag.style.transform == "scale(1, 1)") {
    topflag.style.transform = "scale(0, 1)";
  } else {
    topflag.style.transform = "scale(1, 1)";
  }
});

document.getElementById("starone").addEventListener("click", function () {
  document.getElementById("starone").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("startwo").addEventListener("click", function () {
  document.getElementById("startwo").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starthree").addEventListener("click", function () {
  document.getElementById("starthree").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starfour").addEventListener("click", function () {
  document.getElementById("starfour").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starfive").addEventListener("click", function () {
  document.getElementById("starfive").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starsix").addEventListener("click", function () {
  document.getElementById("starsix").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starseven").addEventListener("click", function () {
  document.getElementById("starseven").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("stareight").addEventListener("click", function () {
  document.getElementById("stareight").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starnine").addEventListener("click", function () {
  document.getElementById("starnine").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starten").addEventListener("click", function () {
  document.getElementById("starten").style.opacity = "0";
  tingnoise.play()
  bten.style.opacity = "1";
  bten.style.visibility = "visible";
});
document.getElementById("stareleven").addEventListener("click", function () {
  document.getElementById("stareleven").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("startwelve").addEventListener("click", function () {
  document.getElementById("startwelve").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starthirteen").addEventListener("click", function () {
  document.getElementById("starthirteen").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starfourteen").addEventListener("click", function () {
  document.getElementById("starfourteen").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starfifteen").addEventListener("click", function () {
  document.getElementById("starfifteen").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starsixteen").addEventListener("click", function () {
  document.getElementById("starsixteen").style.opacity = "0";
  tingnoise.play()
});
document.getElementById("starseventeen").addEventListener("click", function () {
  document.getElementById("starseventeen").style.opacity = "0";
  tingnoise.play()
});

bone.addEventListener("click", function () {
  if(fone.style.opacity == 0){
    fone.style.visibility = "visible";
    fone.style.opacity = "1";
  } else {
    fone.style.visibility = "hidden";
    fone.style.opacity = "0";
  }
});
btwo.addEventListener("click", function () {
  if(ftwo.style.opacity == 0){
    ftwo.style.visibility = "visible";
    ftwo.style.opacity = "1";
  } else {
    ftwo.style.visibility = "hidden";
    ftwo.style.opacity = "0";
  }
});
bthree.addEventListener("click", function () {
  if(fthree.style.opacity == 0){
    fthree.style.visibility = "visible";
    fthree.style.opacity = "1";
  } else {
    fthree.style.visibility = "hidden";
    fthree.style.opacity = "0";
  }
});
bfour.addEventListener("click", function () {
  if(ffour.style.opacity == 0){
    ffour.style.visibility = "visible";
    ffour.style.opacity = "1";
  } else {
    ffour.style.visibility = "hidden";
    ffour.style.opacity = "0";
  }
});
bfive.addEventListener("click", function () {
  if(ffive.style.opacity == 0){
    ffive.style.visibility = "visible";
    ffive.style.opacity = "1";
  } else {
    ffive.style.visibility = "hidden";
    ffive.style.opacity = "0";
  }
});
bsix.addEventListener("click", function () {
  if(fsix.style.opacity == 0){
    fsix.style.visibility = "visible";
    fsix.style.opacity = "1";
  } else {
    fsix.style.visibility = "hidden";
    fsix.style.opacity = "0";
  }
});
bseven.addEventListener("click", function () {
  if(fseven.style.opacity == 0){
    fseven.style.visibility = "visible";
    fseven.style.opacity = "1";
  } else {
    fseven.style.visibility = "hidden";
    fseven.style.opacity = "0";
  }
});
beight.addEventListener("click", function () {
  if(feight.style.opacity == 0){
    feight.style.visibility = "visible";
    feight.style.opacity = "1";
  } else {
    feight.style.visibility = "hidden";
    feight.style.opacity = "0";
  }
});
bnine.addEventListener("click", function () {
  if(fnine.style.opacity == 0){
    fnine.style.visibility = "visible";
    fnine.style.opacity = "1";
  } else {
    fnine.style.visibility = "hidden";
    fnine.style.opacity = "0";
  }
});
bten.addEventListener("click", function () {
  if(ften.style.opacity == 0){
    ften.style.visibility = "visible";
    ften.style.opacity = "1";
  } else {
    ften.style.visibility = "hidden";
    ften.style.opacity = "0";
  }
});


fone.addEventListener("click", function () {
  fone.style.visibility = "hidden";
  fone.style.opacity = "1";
});
ftwo.addEventListener("click", function () {
  ftwo.style.visibility = "hidden";
  ftwo.style.opacity = "0";
});
fthree.addEventListener("click", function () {
  fthree.style.visibility = "hidden";
  fthree.style.opacity = "0";
});
ffour.addEventListener("click", function () {
  ffour.style.visibility = "hidden";
  ffour.style.opacity = "0";
});
ffive.addEventListener("click", function () {
  ffive.style.visibility = "hidden";
  ffive.style.opacity = "0";
});
fsix.addEventListener("click", function () {
  fsix.style.visibility = "hidden";
  fsix.style.opacity = "0";
});
fseven.addEventListener("click", function () {
  fseven.style.visibility = "hidden";
  fseven.style.opacity = "0";
});
feight.addEventListener("click", function () {
  feight.style.visibility = "hidden";
  feight.style.opacity = "0";
});
fnine.addEventListener("click", function () {
  fnine.style.visibility = "hidden";
  fnine.style.opacity = "0";
});
ften.addEventListener("click", function () {
  ften.style.visibility = "hidden";
  ften.style.opacity = "0";
});