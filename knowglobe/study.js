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

function countryClick(title, name){
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
    countryClick("spain", "Spain");
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
    countryClick("germany", "Germany");
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
    countryClick("sweden", "Sweden");
});

finland.addEventListener("click", function(){
    countryClick("finland", "Finland");
});

russia.addEventListener("click", function(){
    countryClick("russia", "Russia");
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