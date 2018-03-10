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

maple.addEventListener("click", function () {
    maple.style.opacity = "0";
    greeting.style.opacity = "0";
    maple.style.visibility = "hidden";
    greeting.style.visibility = "hidden";
    right.style.transform = "translateX(500px)";
    left.style.transform = "translateX(-500px)";
});

flagpole.addEventListener("click", function () {
    document.getElementById("facttwo").style.opacity = "1";
    document.getElementById("facttwo").style.visibility = "visible";
    if (flag.style.transform == "translateY(0px)"){
        flag.style.transform = "translateY(400px)";
        flag.style.visibility = "hidden";
    } else {
        flag.style.transform = "translateY(0px)";
        flag.style.visibility = "visible";
    }
});

mountie.addEventListener("click", function () {
    document.getElementById("factone").style.opacity = "1";
    document.getElementById("factone").style.visibility = "visible";
    ehnoise.play();
    if (hat.style.transform == "rotate(30deg)"){
        hat.style.transform = "rotate(0deg)";
    } else {
        hat.style.transform = "rotate(30deg)";
    }
});

moose.addEventListener("click", function () {
    document.getElementById("factfour").style.opacity = "1";
    document.getElementById("factfour").style.visibility = "visible";
    moosenoise.play();
    if (moosehead.style.transform == "rotate(20deg)"){
        moosehead.style.transform = "rotate(0deg)";
    } else {
        moosehead.style.transform = "rotate(20deg)";
    }
});

tree.addEventListener("click", function () {
    leaves.classList.add("shakeclass");
    document.getElementById("factthree").style.opacity = "1";
    document.getElementById("factthree").style.visibility = "visible";
    leafnoise.play();
});

beaver.addEventListener("click", function () {
    tail.classList.add("slapclass");
    document.getElementById("factfive").style.opacity = "1";
    document.getElementById("factfive").style.visibility = "visible";
    slapnoise.play();
});

bigcloud.addEventListener("click", function () {
    bigcloud.style.transform = "translateX(400px)";
});

mediumcloud.addEventListener("click", function () {
    mediumcloud.style.transform = "translateX(500px)";
    document.getElementById("factsix").style.opacity = "1";
    document.getElementById("factsix").style.visibility = "visible";
});

smallcloud.addEventListener("click", function () {
    smallcloud.style.transform = "translateX(600px)";
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
    document.getElementById("factseven").style.opacity = "1";
    document.getElementById("factseven").style.visibility = "visible";
    lightnoise.play();
    
    if (door.style.opacity == "0"){
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
    document.getElementById("facteight").style.opacity = "1";
    document.getElementById("facteight").style.visibility = "visible";
});

roof.addEventListener("click", function () {
    document.getElementById("factnine").style.opacity = "1";
    document.getElementById("factnine").style.visibility = "visible";
    
    if (topflag.style.transform == "scale(1, 1)"){
        topflag.style.transform = "scale(0, 1)";
    } else {
        topflag.style.transform = "scale(1, 1)";
    }
});

document.getElementById("starone").addEventListener("click", function () {
    document.getElementById("starone").style.opacity = "0";
});
document.getElementById("startwo").addEventListener("click", function () {
    document.getElementById("startwo").style.opacity = "0";
});
document.getElementById("starthree").addEventListener("click", function () {
    document.getElementById("starthree").style.opacity = "0";
});
document.getElementById("starfour").addEventListener("click", function () {
    document.getElementById("starfour").style.opacity = "0";
});
document.getElementById("starfive").addEventListener("click", function () {
    document.getElementById("starfive").style.opacity = "0";
});
document.getElementById("starsix").addEventListener("click", function () {
    document.getElementById("starsix").style.opacity = "0";
});
document.getElementById("starseven").addEventListener("click", function () {
    document.getElementById("starseven").style.opacity = "0";
});
document.getElementById("stareight").addEventListener("click", function () {
    document.getElementById("stareight").style.opacity = "0";
});
document.getElementById("starnine").addEventListener("click", function () {
    document.getElementById("starnine").style.opacity = "0";
});
document.getElementById("starten").addEventListener("click", function () {
    document.getElementById("starten").style.opacity = "0";
    document.getElementById("factten").style.opacity = "1";
    document.getElementById("factten").style.visibility = "visible";
});
document.getElementById("stareleven").addEventListener("click", function () {
    document.getElementById("stareleven").style.opacity = "0";
});
document.getElementById("startwelve").addEventListener("click", function () {
    document.getElementById("startwelve").style.opacity = "0";
});
document.getElementById("starthirteen").addEventListener("click", function () {
    document.getElementById("starthirteen").style.opacity = "0";
});
document.getElementById("starfourteen").addEventListener("click", function () {
    document.getElementById("starfourteen").style.opacity = "0";
});
document.getElementById("starfifteen").addEventListener("click", function () {
    document.getElementById("starfifteen").style.opacity = "0";
});
document.getElementById("starsixteen").addEventListener("click", function () {
    document.getElementById("starsixteen").style.opacity = "0";
});
document.getElementById("starseventeen").addEventListener("click", function () {
    document.getElementById("starseventeen").style.opacity = "0";
});