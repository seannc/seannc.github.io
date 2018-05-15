//FLAG GAME
var bangladesh = document.getElementById("bangladesh"),
    cambodia = document.getElementById("cambodia"),
    india = document.getElementById("india"),
    china = document.getElementById("china"),
    indonesia = document.getElementById("indonesia"),
    iran = document.getElementById("iran"),
    japan = document.getElementById("japan"),
    kazakhstan = document.getElementById("kazakhstan"),
    mongolia = document.getElementById("mongolia"),
    northkorea = document.getElementById("northkorea"),
    philippines = document.getElementById("philippines"),
    southkorea = document.getElementById("southkorea"),
    taiwan = document.getElementById("taiwan"),
    vietnam = document.getElementById("vietnam"),
    malaysia = document.getElementById("malaysia"),
    myanmar = document.getElementById("myanmar"),
    pakistan = document.getElementById("pakistan"),
    srilanka = document.getElementById("srilanka"),
    thailand = document.getElementById("thailand"),
    afghanistan = document.getElementById("afghanistan")

var bangladeshf = document.getElementById("bangladeshf"),
    cambodiaf = document.getElementById("cambodiaf"),
    indiaf = document.getElementById("indiaf"),
    chinaf = document.getElementById("chinaf"),
    indonesiaf = document.getElementById("indonesiaf"),
    iranf = document.getElementById("iranf"),
    japanf = document.getElementById("japanf"),
    kazakhstanf = document.getElementById("kazakhstanf"),
    mongoliaf = document.getElementById("mongoliaf"),
    northkoreaf = document.getElementById("northkoreaf"),
    philippinesf = document.getElementById("philippinesf"),
    southkoreaf = document.getElementById("southkoreaf"),
    taiwanf = document.getElementById("taiwanf"),
    vietnamf = document.getElementById("vietnamf"),
    malaysiaf = document.getElementById("malaysiaf"),
    myanmarf = document.getElementById("myanmarf"),
    pakistanf = document.getElementById("pakistanf"),
    srilankaf = document.getElementById("srilankaf"),
    thailandf = document.getElementById("thailandf"),
    afghanistanf = document.getElementById("afghanistanf")

var cursor = document.getElementById("cursor"),
    thename = "",
    wrongpop = document.getElementById("wrongwarning"),
    helppop = document.getElementById("whatwarning")

// TURNS CURSOR TO FLAG
function flagCursor(el){
    imgsrc = el.src;
    cursor.src = imgsrc;
    cursor.style.display = "block";
};

bangladeshf.addEventListener("click", function(){
    flagCursor(this);
    thename = bangladesh;
});

cambodiaf.addEventListener("click", function(){
    flagCursor(this);
    thename = cambodia;
});

indiaf.addEventListener("click", function(){
    flagCursor(this);
    thename = india;
});

chinaf.addEventListener("click", function(){
    flagCursor(this);
    thename = china;
});

indonesiaf.addEventListener("click", function(){
    flagCursor(this);
    thename = indonesia;
});

iranf.addEventListener("click", function(){
    flagCursor(this);
    thename = iran;
});

japanf.addEventListener("click", function(){
    flagCursor(this);
    thename = japan;
});

kazakhstanf.addEventListener("click", function(){
    flagCursor(this);
    thename = kazakhstan;
});

mongoliaf.addEventListener("click", function(){
    flagCursor(this);
    thename = mongolia;
});

northkoreaf.addEventListener("click", function(){
    flagCursor(this);
    thename = northkorea;
});

philippinesf.addEventListener("click", function(){
    flagCursor(this);
    thename = philippines;
});

southkoreaf.addEventListener("click", function(){
    flagCursor(this);
    thename = southkorea;
});

taiwanf.addEventListener("click", function(){
    flagCursor(this);
    thename = taiwan;
});

vietnamf.addEventListener("click", function(){
    flagCursor(this);
    thename = vietnam;
});

malaysiaf.addEventListener("click", function(){
    flagCursor(this);
    thename = malaysia;
});

myanmarf.addEventListener("click", function(){
    flagCursor(this);
    thename = myanmar;
});

pakistanf.addEventListener("click", function(){
    flagCursor(this);
    thename = pakistan;
});

srilankaf.addEventListener("click", function(){
    flagCursor(this);
    thename = srilanka;
});

thailandf.addEventListener("click", function(){
    flagCursor(this);
    thename = thailand;
});

afghanistanf.addEventListener("click", function(){
    flagCursor(this);
    thename = afghanistan;
});

document.getElementById("clear").addEventListener("click", function(){
    cursor.style.display = "none";
    thename = "";
    help.innerHTML = "";
    help.style.opacity = 0;
});

document.getElementById("reset").addEventListener("click", function(){
    location.reload();
});

document.body.addEventListener("mousemove", function(ev){
    cursor.style.top = ev.pageY+"px";
    cursor.style.left = ev.pageX+"px";
});


//COUNTRY MATCHING
var leftnum = 0,
    rightnum = 0,
    wrongnum = 0,
    wrongcount = 0;

function leftPick(cname){
    if(thename == cname) {
        cname.style.display = "none";
        cursor.style.display = "none";
        leftnum++;
        thename = "";
        //console.log(leftnum);
    } else{
        wrongnum++;
        wrongcount++;
        console.log(wrongnum);
        console.log(wrongcount);
    }
    
    if(leftnum == 1){
    iranf.style.display = "inline-block";
    }
    
    if(leftnum == 2){
    taiwanf.style.display = "inline-block";
    }
    
    if(leftnum == 3){
    bangladeshf.style.display = "inline-block";
    }
    
    if(leftnum == 4){
    cambodiaf.style.display = "inline-block";
    }
    
    if(leftnum == 5){
    afghanistanf.style.display = "inline-block";
    }
    
    if(wrongnum == 7){
        wrongpop.style.opacity = 1;
        wrongpop.style.visibility = "visible";
        wrongnum = 0;
    }
};

function rightPick(cname){
    if(thename == cname) {
        cname.style.display = "none";
        cursor.style.display = "none";
        rightnum++;
        thename = "";
        //console.log(rightnum);
    } else{
        wrongnum++;
        wrongcount++;
        console.log(wrongnum);
        console.log(wrongcount);
    }
    
    if(rightnum == 1){
    thailandf.style.display = "inline-block";
    }
    
    if(rightnum == 2){
    pakistanf.style.display = "inline-block";
    }
    
    if(rightnum == 3){
    kazakhstanf.style.display = "inline-block";
    }
    
    if(rightnum == 4){
    malaysiaf.style.display = "inline-block";
    }
    
    if(rightnum == 5){
    northkoreaf.style.display = "inline-block";
    }
    
    if(wrongnum == 7){
        wrongpop.style.opacity = 1;
        wrongpop.style.visibility = "visible";
        wrongnum = 0;
    }
};

wrongpop.addEventListener("click", function(){
    wrongpop.style.visibility = "hidden";
    wrongpop.style.opacity = "0";
});

bangladesh.addEventListener("click", function(){
    leftPick(this);
    
    if(bangladesh.style.display == "none"){
        bangladeshf.style.display = "none";
    }
});

cambodia.addEventListener("click", function(){
    leftPick(this);
    
    if(cambodia.style.display == "none"){
        cambodiaf.style.display = "none";
    }
});

india.addEventListener("click", function(){
    leftPick(this);
    
    if(india.style.display == "none"){
        indiaf.style.display = "none";
    }
});

china.addEventListener("click", function(){
    leftPick(this);
    
    if(china.style.display == "none"){
        chinaf.style.display = "none";
    }
});

indonesia.addEventListener("click", function(){
    rightPick(this);
    
    if(indonesia.style.display == "none"){
        indonesiaf.style.display = "none";
    }
});

iran.addEventListener("click", function(){
    leftPick(this);
    
    if(iran.style.display == "none"){
        iranf.style.display = "none";
    }
});

japan.addEventListener("click", function(){
    leftPick(this);
    
    if(japan.style.display == "none"){
        japanf.style.display = "none";
    }
});

kazakhstan.addEventListener("click", function(){
    rightPick(this);
    
    if(kazakhstan.style.display == "none"){
        kazakhstanf.style.display = "none";
    }
});

mongolia.addEventListener("click", function(){
    leftPick(this);
    
    if(mongolia.style.display == "none"){
        mongoliaf.style.display = "none";
    }
});

northkorea.addEventListener("click", function(){
    rightPick(this);
    
    if(northkorea.style.display == "none"){
        northkoreaf.style.display = "none";
    }
});

philippines.addEventListener("click", function(){
    rightPick(this);
    
    if(philippines.style.display == "none"){
        philippinesf.style.display = "none";
    }
});

southkorea.addEventListener("click", function(){
    rightPick(this);
    
    if(southkorea.style.display == "none"){
        southkoreaf.style.display = "none";
    }
});

taiwan.addEventListener("click", function(){
    leftPick(this);
    
    if(taiwan.style.display == "none"){
        taiwanf.style.display = "none";
    }
});

vietnam.addEventListener("click", function(){
    rightPick(this);
    
    if(vietnam.style.display == "none"){
        vietnamf.style.display = "none";
    }
});

malaysia.addEventListener("click", function(){
    rightPick(this);
    
    if(malaysia.style.display == "none"){
        malaysiaf.style.display = "none";
    }
});

myanmar.addEventListener("click", function(){
    rightPick(this);
    
    if(myanmar.style.display == "none"){
        myanmarf.style.display = "none";
    }
});

pakistan.addEventListener("click", function(){
    rightPick(this);
    
    if(pakistan.style.display == "none"){
        pakistanf.style.display = "none";
    }
});

srilanka.addEventListener("click", function(){
    leftPick(this);
    
    if(srilanka.style.display == "none"){
        srilankaf.style.display = "none";
    }
});

thailand.addEventListener("click", function(){
    rightPick(this);
    
    if(thailand.style.display == "none"){
        thailandf.style.display = "none";
    }
});

afghanistan.addEventListener("click", function(){
    leftPick(this);
    
    if(afghanistan.style.display == "none"){
        afghanistanf.style.display = "none";
    }
});

//HELP BUTTON
var help = document.getElementById("thatsthis")

document.getElementById("whatsthis").addEventListener("click", function(){
    if(thename == kazakhstan){
        help.innerHTML = "Kazakhstan";
        help.style.opacity = 1;
    } else if(thename == myanmar){
        help.innerHTML = "Myanmar";
        help.style.opacity = 1;
    } else if(thename == cambodia){
        help.innerHTML = "Cambodia";
        help.style.opacity = 1;
    } else if(thename == india){
        help.innerHTML = "India";
        help.style.opacity = 1;
    } else if(thename == afghanistan){
        help.innerHTML = "Afghanistan";
        help.style.opacity = 1;
    } else if(thename == japan){
        help.innerHTML = "Japan";
        help.style.opacity = 1;
    } else if(thename == southkorea){
        help.innerHTML = "South Korea";
        help.style.opacity = 1;
    } else if(thename == taiwan){
        help.innerHTML = "Taiwan";
        help.style.opacity = 1;
    } else if(thename == china){
        help.innerHTML = "China";
        help.style.opacity = 1;
    } else if(thename == bangladesh){
        help.innerHTML = "Bangladesh";
        help.style.opacity = 1;
    } else if(thename == pakistan){
        help.innerHTML = "Pakistan";
        help.style.opacity = 1;
    } else if(thename == malaysia){
        help.innerHTML = "Malaysia";
        help.style.opacity = 1;
    } else if(thename == indonesia){
        help.innerHTML = "Indonesia";
        help.style.opacity = 1;
    } else if(thename == vietnam){
        help.innerHTML = "Vietnam";
        help.style.opacity = 1;
    } else if(thename == mongolia){
        help.innerHTML = "Mongolia";
        help.style.opacity = 1;
    } else if(thename == iran){
        help.innerHTML = "Iran";
        help.style.opacity = 1;
    } else if(thename == northkorea){
        help.innerHTML = "North Korea";
        help.style.opacity = 1;
    } else if(thename == srilanka){
        help.innerHTML = "Sri Lanka";
        help.style.opacity = 1;
    } else if(thename == thailand){
        help.innerHTML = "Thailand";
        help.style.opacity = 1;
    } else if(thename == philippines){
        help.innerHTML = "Philippines";
        help.style.opacity = 1;
    } else {
        helppop.style.visibility = "visible";
        helppop.style.opacity = "1";
    }
});

helppop.addEventListener("click", function(){
    helppop.style.visibility = "hidden";
    helppop.style.opacity = "0";
});

//SCOREKEEPING
var score = document.getElementById("score")
var win = document.getElementById("win")
var wrongcounter = document.getElementById("wrongcounter")

document.getElementById("europemapsvg").addEventListener("click", function(){
    score.innerHTML = leftnum+rightnum+"/20";
    wrongcounter.innerHTML = wrongcount;
    
    if(leftnum+rightnum == 20){
        win.style.opacity = 1;
        win.style.visibility = "visible";
    }
});

win.addEventListener("click", function(){
    win.style.visibility = "hidden";
    win.style.opacity = "0";
});