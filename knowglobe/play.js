//FLAG GAME
var uk = document.getElementById("uk"),
    ireland = document.getElementById("ireland"),
    portugal = document.getElementById("portugal"),
    spain = document.getElementById("spain"),
    france = document.getElementById("france"),
    belgium = document.getElementById("belgium"),
    netherlands = document.getElementById("netherlands"),
    germany = document.getElementById("germany"),
    austria = document.getElementById("austria"),
    italy = document.getElementById("italy"),
    poland = document.getElementById("poland"),
    ukraine = document.getElementById("ukraine"),
    norway = document.getElementById("norway"),
    sweden = document.getElementById("sweden"),
    finland = document.getElementById("finland"),
    russia = document.getElementById("russia"),
    croatia = document.getElementById("croatia"),
    slovakia = document.getElementById("slovakia"),
    greece = document.getElementById("greece"),
    turkey = document.getElementById("turkey")

var ukf = document.getElementById("ukf"),
    irelandf = document.getElementById("irelandf"),
    portugalf = document.getElementById("portugalf"),
    spainf = document.getElementById("spainf"),
    francef = document.getElementById("francef"),
    belgiumf = document.getElementById("belgiumf"),
    netherlandsf = document.getElementById("netherlandsf"),
    germanyf = document.getElementById("germanyf"),
    austriaf = document.getElementById("austriaf"),
    italyf = document.getElementById("italyf"),
    polandf = document.getElementById("polandf"),
    ukrainef = document.getElementById("ukrainef"),
    norwayf = document.getElementById("norwayf"),
    swedenf = document.getElementById("swedenf"),
    finlandf = document.getElementById("finlandf"),
    russiaf = document.getElementById("russiaf"),
    croatiaf = document.getElementById("croatiaf"),
    slovakiaf = document.getElementById("slovakiaf"),
    greecef = document.getElementById("greecef"),
    turkeyf = document.getElementById("turkeyf")

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

ukf.addEventListener("click", function(){
    flagCursor(this);
    thename = uk;
});

irelandf.addEventListener("click", function(){
    flagCursor(this);
    thename = ireland;
});

portugalf.addEventListener("click", function(){
    flagCursor(this);
    thename = portugal;
});

spainf.addEventListener("click", function(){
    flagCursor(this);
    thename = spain;
});

francef.addEventListener("click", function(){
    flagCursor(this);
    thename = france;
});

belgiumf.addEventListener("click", function(){
    flagCursor(this);
    thename = belgium;
});

netherlandsf.addEventListener("click", function(){
    flagCursor(this);
    thename = netherlands;
});

germanyf.addEventListener("click", function(){
    flagCursor(this);
    thename = germany;
});

austriaf.addEventListener("click", function(){
    flagCursor(this);
    thename = austria;
});

italyf.addEventListener("click", function(){
    flagCursor(this);
    thename = italy;
});

polandf.addEventListener("click", function(){
    flagCursor(this);
    thename = poland;
});

ukrainef.addEventListener("click", function(){
    flagCursor(this);
    thename = ukraine;
});

norwayf.addEventListener("click", function(){
    flagCursor(this);
    thename = norway;
});

swedenf.addEventListener("click", function(){
    flagCursor(this);
    thename = sweden;
});

finlandf.addEventListener("click", function(){
    flagCursor(this);
    thename = finland;
});

russiaf.addEventListener("click", function(){
    flagCursor(this);
    thename = russia;
});

croatiaf.addEventListener("click", function(){
    flagCursor(this);
    thename = croatia;
});

slovakiaf.addEventListener("click", function(){
    flagCursor(this);
    thename = slovakia;
});

greecef.addEventListener("click", function(){
    flagCursor(this);
    thename = greece;
});

turkeyf.addEventListener("click", function(){
    flagCursor(this);
    thename = turkey;
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
    wrongnum = 0;

function leftPick(cname){
    if(thename == cname) {
        cname.style.display = "none";
        cursor.style.display = "none";
        leftnum++;
        thename = "";
        //console.log(leftnum);
    } else{
        wrongnum++;
        console.log(wrongnum);
    }
    
    if(leftnum == 1){
    netherlandsf.style.display = "inline-block";
    }
    
    if(leftnum == 2){
    ukrainef.style.display = "inline-block";
    }
    
    if(leftnum == 3){
    norwayf.style.display = "inline-block";
    }
    
    if(leftnum == 4){
    spainf.style.display = "inline-block";
    }
    
    if(leftnum == 5){
    ukf.style.display = "inline-block";
    }
    
    if(wrongnum == 7){
        wrongpop.style.opacity = 1;
        wrongpop.style.display = "block";
        alert("If you're having trouble, click the book icon to go back and study, or ask the 'what country is this' button for help.");
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
        console.log(wrongnum);
    }
    
    if(rightnum == 1){
    belgiumf.style.display = "inline-block";
    }
    
    if(rightnum == 2){
    italyf.style.display = "inline-block";
    }
    
    if(rightnum == 3){
    slovakiaf.style.display = "inline-block";
    }
    
    if(rightnum == 4){
    greecef.style.display = "inline-block";
    }
    
    if(rightnum == 5){
    polandf.style.display = "inline-block";
    }
    
    if(wrongnum == 7){
        wrongpop.style.opacity = 1;
        wrongpop.style.display = "block";
        alert("If you're having trouble, click the book icon to go back and study, or ask the 'what country is this' button for help.");
        wrongnum = 0;
    }
};

uk.addEventListener("click", function(){
    leftPick(this);
    
    if(uk.style.display == "none"){
        ukf.style.display = "none";
    }
});

ireland.addEventListener("click", function(){
    leftPick(this);
    
    if(ireland.style.display == "none"){
        irelandf.style.display = "none";
    }
});

portugal.addEventListener("click", function(){
    leftPick(this);
    
    if(portugal.style.display == "none"){
        portugalf.style.display = "none";
    }
});

spain.addEventListener("click", function(){
    leftPick(this);
    
    if(spain.style.display == "none"){
        spainf.style.display = "none";
    }
});

france.addEventListener("click", function(){
    rightPick(this);
    
    if(france.style.display == "none"){
        francef.style.display = "none";
    }
});

belgium.addEventListener("click", function(){
    rightPick(this);
    
    if(belgium.style.display == "none"){
        belgiumf.style.display = "none";
    }
});

netherlands.addEventListener("click", function(){
    leftPick(this);
    
    if(netherlands.style.display == "none"){
        netherlandsf.style.display = "none";
    }
});

germany.addEventListener("click", function(){
    leftPick(this);
    
    if(germany.style.display == "none"){
        germanyf.style.display = "none";
    }
});

austria.addEventListener("click", function(){
    rightPick(this);
    
    if(austria.style.display == "none"){
        austriaf.style.display = "none";
    }
});

italy.addEventListener("click", function(){
    rightPick(this);
    
    if(italy.style.display == "none"){
        italyf.style.display = "none";
    }
});

poland.addEventListener("click", function(){
    rightPick(this);
    
    if(poland.style.display == "none"){
        polandf.style.display = "none";
    }
});

ukraine.addEventListener("click", function(){
    leftPick(this);
    
    if(ukraine.style.display == "none"){
        ukrainef.style.display = "none";
    }
});

norway.addEventListener("click", function(){
    leftPick(this);
    
    if(norway.style.display == "none"){
        norwayf.style.display = "none";
    }
});

sweden.addEventListener("click", function(){
    rightPick(this);
    
    if(sweden.style.display == "none"){
        swedenf.style.display = "none";
    }
});

finland.addEventListener("click", function(){
    rightPick(this);
    
    if(finland.style.display == "none"){
        finlandf.style.display = "none";
    }
});

russia.addEventListener("click", function(){
    leftPick(this);
    
    if(russia.style.display == "none"){
        russiaf.style.display = "none";
    }
});

croatia.addEventListener("click", function(){
    rightPick(this);
    
    if(croatia.style.display == "none"){
        croatiaf.style.display = "none";
    }
});

slovakia.addEventListener("click", function(){
    rightPick(this);
    
    if(slovakia.style.display == "none"){
        slovakiaf.style.display = "none";
    }
});

greece.addEventListener("click", function(){
    rightPick(this);
    
    if(greece.style.display == "none"){
        greecef.style.display = "none";
    }
});

turkey.addEventListener("click", function(){
    leftPick(this);
    
    if(turkey.style.display == "none"){
        turkeyf.style.display = "none";
    }
});

//HELP BUTTON
var help = document.getElementById("thatsthis")

document.getElementById("whatsthis").addEventListener("click", function(){
    if(thename == germany){
        help.innerHTML = "Germany";
        help.style.opacity = 1;
    } else if(thename == russia){
        help.innerHTML = "Russia";
        help.style.opacity = 1;
    } else if(thename == ireland){
        help.innerHTML = "Ireland";
        help.style.opacity = 1;
    } else if(thename == portugal){
        help.innerHTML = "Portugal";
        help.style.opacity = 1;
    } else if(thename == turkey){
        help.innerHTML = "Turkey";
        help.style.opacity = 1;
    } else if(thename == netherlands){
        help.innerHTML = "Netherlands";
        help.style.opacity = 1;
    } else if(thename == ukraine){
        help.innerHTML = "Ukraine";
        help.style.opacity = 1;
    } else if(thename == norway){
        help.innerHTML = "Norway";
        help.style.opacity = 1;
    } else if(thename == spain){
        help.innerHTML = "Spain";
        help.style.opacity = 1;
    } else if(thename == uk){
        help.innerHTML = "United<br>Kingdom";
        help.style.opacity = 1;
    } else if(thename == croatia){
        help.innerHTML = "Croatia";
        help.style.opacity = 1;
    } else if(thename == finland){
        help.innerHTML = "Finland";
        help.style.opacity = 1;
    } else if(thename == france){
        help.innerHTML = "France";
        help.style.opacity = 1;
    } else if(thename == sweden){
        help.innerHTML = "Sweden";
        help.style.opacity = 1;
    } else if(thename == austria){
        help.innerHTML = "Austria";
        help.style.opacity = 1;
    } else if(thename == belgium){
        help.innerHTML = "Belgium";
        help.style.opacity = 1;
    } else if(thename == italy){
        help.innerHTML = "Italy";
        help.style.opacity = 1;
    } else if(thename == slovakia){
        help.innerHTML = "Slovakia";
        help.style.opacity = 1;
    } else if(thename == greece){
        help.innerHTML = "Greece";
        help.style.opacity = 1;
    } else if(thename == poland){
        help.innerHTML = "Poland";
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

document.getElementById("europemapsvg").addEventListener("click", function(){
    score.innerHTML = leftnum+rightnum+"/20";
    
    if(leftnum+rightnum == 20){
        win.style.opacity = 1;
        win.style.visibility = "visible";
    }
});

win.addEventListener("click", function(){
    win.style.visibility = "hidden";
    win.style.opacity = "0";
});