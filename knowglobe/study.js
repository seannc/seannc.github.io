//COUNTRY PROFILES
var contentpage = document.getElementById("contentpage"),
    flag = document.getElementById("flag"),
    countryname = document.getElementById("countryname"),
    infolink = document.getElementById("infolink")

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

var ukbut = document.getElementById("ukbut"),
    irelandbut = document.getElementById("irelandbut"),
    portugalbut = document.getElementById("portugalbut"),
    spainbut = document.getElementById("spainbut"),
    francebut = document.getElementById("francebut"),
    belgiumbut = document.getElementById("belgiumbut"),
    netherlandsbut = document.getElementById("netherlandsbut"),
    germanybut = document.getElementById("germanybut"),
    austriabut = document.getElementById("austriabut"),
    italybut = document.getElementById("italybut"),
    polandbut = document.getElementById("polandbut"),
    ukrainebut = document.getElementById("ukrainebut"),
    norwaybut = document.getElementById("norwaybut"),
    swedenbut = document.getElementById("swedenbut"),
    finlandbut = document.getElementById("finlandbut"),
    russiabut = document.getElementById("russiabut"),
    croatiabut = document.getElementById("croatiabut"),
    slovakiabut = document.getElementById("slovakiabut"),
    greecebut = document.getElementById("greecebut"),
    turkeybut = document.getElementById("turkeybut")

function countryClick(title, name){
    infolink.style.visibility = "hidden";
    contentpage.style.visibility = "visible";
    flag.src = "imgs/flags/"+title+".png";
    countryname.innerHTML = name;
}

function quizableClick(title, name){
    infolink.style.visibility = "visible";
    contentpage.style.visibility = "visible";
    flag.src = "imgs/flags/"+title+".png";
    infolink.href = "info/"+title+".html";
    countryname.innerHTML = name;
}

uk.addEventListener("click", function(){
    countryClick("uk", "United<br>Kingdom");
});

ireland.addEventListener("click", function(){
    countryClick("ireland", "Ireland");
});

portugal.addEventListener("click", function(){
    countryClick("portugal", "Portugal");
});

spain.addEventListener("click", function(){
    quizableClick("spain", "Spain");
});

france.addEventListener("click", function(){
    countryClick("france", "France");
});

belgium.addEventListener("click", function(){
    countryClick("belgium", "Belgium");
});

netherlands.addEventListener("click", function(){
    countryClick("netherlands", "Netherlands");
});

germany.addEventListener("click", function(){
    quizableClick("germany", "Germany");
});

austria.addEventListener("click", function(){
    countryClick("austria", "Austria");
});

italy.addEventListener("click", function(){
    countryClick("italy", "Italy");
});

poland.addEventListener("click", function(){
    countryClick("poland", "Poland");
});

ukraine.addEventListener("click", function(){
    countryClick("ukraine", "Ukraine");
});

norway.addEventListener("click", function(){
    countryClick("norway", "Norway");
});

sweden.addEventListener("click", function(){
    quizableClick("sweden", "Sweden");
});

finland.addEventListener("click", function(){
    countryClick("finland", "Finland");
});

russia.addEventListener("click", function(){
    quizableClick("russia", "Russia");
});

croatia.addEventListener("click", function(){
    countryClick("croatia", "Croatia");
});

slovakia.addEventListener("click", function(){
    countryClick("slovakia", "Slovakia");
});

greece.addEventListener("click", function(){
    countryClick("greece", "Greece");
});

turkey.addEventListener("click", function(){
    countryClick("turkey", "Turkey");
});

//BUTTPN HOVERSTATES
function buttonHover(count){
    count.style.opacity = 0;
}

function buttonLeave(count){
    count.style.opacity = 1;
}

germanybut.addEventListener("mouseover", function(){
    buttonHover(germany);
});

germanybut.addEventListener("mouseout", function(){
    buttonLeave(germany);
});

russiabut.addEventListener("mouseover", function(){
    buttonHover(russia);
});

russiabut.addEventListener("mouseout", function(){
    buttonLeave(russia);
});

irelandbut.addEventListener("mouseover", function(){
    buttonHover(ireland);
});

irelandbut.addEventListener("mouseout", function(){
    buttonLeave(ireland);
});

portugalbut.addEventListener("mouseover", function(){
    buttonHover(portugal);
});

portugalbut.addEventListener("mouseout", function(){
    buttonLeave(portugal);
});

turkeybut.addEventListener("mouseover", function(){
    buttonHover(turkey);
});

turkeybut.addEventListener("mouseout", function(){
    buttonLeave(turkey);
});

ukrainebut.addEventListener("mouseover", function(){
    buttonHover(ukraine);
});

ukrainebut.addEventListener("mouseout", function(){
    buttonLeave(ukraine);
});

ukrainebut.addEventListener("mouseover", function(){
    buttonHover(ukraine);
});

ukrainebut.addEventListener("mouseout", function(){
    buttonLeave(ukraine);
});

norwaybut.addEventListener("mouseover", function(){
    buttonHover(norway);
});

norwaybut.addEventListener("mouseout", function(){
    buttonLeave(norway);
});

spainbut.addEventListener("mouseover", function(){
    buttonHover(spain);
});

spainbut.addEventListener("mouseout", function(){
    buttonLeave(spain);
});

croatiabut.addEventListener("mouseover", function(){
    buttonHover(croatia);
});

croatiabut.addEventListener("mouseout", function(){
    buttonLeave(croatia);
});

finlandbut.addEventListener("mouseover", function(){
    buttonHover(finland);
});

finlandbut.addEventListener("mouseout", function(){
    buttonLeave(finland);
});

francebut.addEventListener("mouseover", function(){
    buttonHover(france);
});

francebut.addEventListener("mouseout", function(){
    buttonLeave(france);
});

swedenbut.addEventListener("mouseover", function(){
    buttonHover(sweden);
});

swedenbut.addEventListener("mouseout", function(){
    buttonLeave(sweden);
});

austriabut.addEventListener("mouseover", function(){
    buttonHover(austria);
});

austriabut.addEventListener("mouseout", function(){
    buttonLeave(austria);
});

belgiumbut.addEventListener("mouseover", function(){
    buttonHover(belgium);
});

belgiumbut.addEventListener("mouseout", function(){
    buttonLeave(belgium);
});

italybut.addEventListener("mouseover", function(){
    buttonHover(italy);
});

italybut.addEventListener("mouseout", function(){
    buttonLeave(italy);
});

slovakiabut.addEventListener("mouseover", function(){
    buttonHover(slovakia);
});

slovakiabut.addEventListener("mouseout", function(){
    buttonLeave(slovakia);
});

greecebut.addEventListener("mouseover", function(){
    buttonHover(greece);
});

greecebut.addEventListener("mouseout", function(){
    buttonLeave(greece);
});

polandbut.addEventListener("mouseover", function(){
    buttonHover(poland);
});

polandbut.addEventListener("mouseout", function(){
    buttonLeave(poland);
});

ukbut.addEventListener("mouseover", function(){
    buttonHover(uk);
});

ukbut.addEventListener("mouseout", function(){
    buttonLeave(uk);
});

netherlandsbut.addEventListener("mouseover", function(){
    buttonHover(netherlands);
});

netherlandsbut.addEventListener("mouseout", function(){
    buttonLeave(netherlands);
});

ukbut.addEventListener("click", function(){
    countryClick("uk", "United<br>Kingdom");
});

irelandbut.addEventListener("click", function(){
    countryClick("ireland", "Ireland");
});

portugalbut.addEventListener("click", function(){
    countryClick("portugal", "Portugal");
});

spainbut.addEventListener("click", function(){
    quizableClick("spain", "Spain");
});

francebut.addEventListener("click", function(){
    quizableClick("france", "France");
});

belgiumbut.addEventListener("click", function(){
    countryClick("belgium", "Belgium");
});

netherlandsbut.addEventListener("click", function(){
    countryClick("netherlands", "Netherlands");
});

germanybut.addEventListener("click", function(){
    quizableClick("germany", "Germany");
});

austriabut.addEventListener("click", function(){
    countryClick("austria", "Austria");
});

italybut.addEventListener("click", function(){
    countryClick("italy", "Italy");
});

polandbut.addEventListener("click", function(){
    countryClick("poland", "Poland");
});

ukrainebut.addEventListener("click", function(){
    countryClick("ukraine", "Ukraine");
});

norwaybut.addEventListener("click", function(){
    countryClick("norway", "Norway");
});

swedenbut.addEventListener("click", function(){
    quizableClick("sweden", "Sweden");
});

finlandbut.addEventListener("click", function(){
    countryClick("finland", "Finland");
});

russiabut.addEventListener("click", function(){
    quizableClick("russia", "Russia");
});

croatiabut.addEventListener("click", function(){
    quizableClick("croatia", "Croatia");
});

slovakiabut.addEventListener("click", function(){
    countryClick("slovakia", "Slovakia");
});

greecebut.addEventListener("click", function(){
    countryClick("greece", "Greece");
});

turkeybut.addEventListener("click", function(){
    countryClick("turkey", "Turkey");
});
