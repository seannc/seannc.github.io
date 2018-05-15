//COUNTRY PROFILES
var contentpage = document.getElementById("contentpage"),
    flag = document.getElementById("flag"),
    countryname = document.getElementById("countryname"),
    infolink = document.getElementById("infolink")

var china = document.getElementById("china"),
    vietnam = document.getElementById("vietnam"),
    japan = document.getElementById("japan"),
    philippines = document.getElementById("philippines"),
    india = document.getElementById("india"),
    indonesia = document.getElementById("indonesia"),
    mongolia = document.getElementById("mongolia"),
    cambodia = document.getElementById("cambodia"),
    myanmar = document.getElementById("myanmar"),
    taiwan = document.getElementById("taiwan"),
    pakistan = document.getElementById("pakistan"),
    afghanistan = document.getElementById("afghanistan"),
    bangladesh = document.getElementById("bangladesh"),
    southkorea = document.getElementById("southkorea"),
    iran = document.getElementById("iran"),
    thailand = document.getElementById("thailand"),
    srilanka = document.getElementById("srilanka"),
    kazakhstan = document.getElementById("kazakhstan"),
    northkorea = document.getElementById("northkorea"),
    malaysia = document.getElementById("malaysia")

var chinabut = document.getElementById("chinabut"),
    vietnambut = document.getElementById("vietnambut"),
    japanbut = document.getElementById("japanbut"),
    philippinesbut = document.getElementById("philippinesbut"),
    indiabut = document.getElementById("indiabut"),
    indonesiabut = document.getElementById("indonesiabut"),
    mongoliabut = document.getElementById("mongoliabut"),
    cambodiabut = document.getElementById("cambodiabut"),
    myanmarbut = document.getElementById("myanmarbut"),
    taiwanbut = document.getElementById("taiwanbut"),
    pakistanbut = document.getElementById("pakistanbut"),
    afghanistanbut = document.getElementById("afghanistanbut"),
    bangladeshbut = document.getElementById("bangladeshbut"),
    southkoreabut = document.getElementById("southkoreabut"),
    iranbut = document.getElementById("iranbut"),
    thailandbut = document.getElementById("thailandbut"),
    srilankabut = document.getElementById("srilankabut"),
    kazakhstanbut = document.getElementById("kazakhstanbut"),
    northkoreabut = document.getElementById("northkoreabut"),
    malaysiabut = document.getElementById("malaysiabut")

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

china.addEventListener("click", function(){
    quizableClick("china", "China");
});

vietnam.addEventListener("click", function(){
    quizableClick("vietnam", "Vietnam");
});

japan.addEventListener("click", function(){
    quizableClick("japan", "Japan");
});

philippines.addEventListener("click", function(){
    quizableClick("philippines", "Philippines");
});

india.addEventListener("click", function(){
    countryClick("india", "India");
});

indonesia.addEventListener("click", function(){
    countryClick("indonesia", "Indonesia");
});

mongolia.addEventListener("click", function(){
    countryClick("mongolia", "Mongolia");
});

cambodia.addEventListener("click", function(){
    countryClick("cambodia", "Cambodia");
});

myanmar.addEventListener("click", function(){
    countryClick("myanmar", "Myanmar");
});

taiwan.addEventListener("click", function(){
    countryClick("taiwan", "Taiwan");
});

pakistan.addEventListener("click", function(){
    countryClick("pakistan", "Pakistan");
});

afghanistan.addEventListener("click", function(){
    countryClick("afghanistan", "Afghanistan");
});

bangladesh.addEventListener("click", function(){
    countryClick("bangladesh", "Bangladesh");
});

southkorea.addEventListener("click", function(){
    countryClick("southkorea", "South<br>Korea");
});

iran.addEventListener("click", function(){
    countryClick("iran", "Iran");
});

thailand.addEventListener("click", function(){
    countryClick("thailand", "Thailand");
});

srilanka.addEventListener("click", function(){
    countryClick("srilanka", "Sri Lanka");
});

kazakhstan.addEventListener("click", function(){
    countryClick("kazakhstan", "Kazakhstan");
});

northkorea.addEventListener("click", function(){
    countryClick("northkorea", "North<br>Korea");
});

malaysia.addEventListener("click", function(){
    countryClick("malaysia", "Malaysia");
});

//BUTTPN HOVERSTATES
function buttonHover(count){
    count.style.opacity = 0;
}

function buttonLeave(count){
    count.style.opacity = 1;
}

cambodiabut.addEventListener("mouseover", function(){
    buttonHover(cambodia);
});

cambodiabut.addEventListener("mouseout", function(){
    buttonLeave(cambodia);
});

thailandbut.addEventListener("mouseover", function(){
    buttonHover(thailand);
});

thailandbut.addEventListener("mouseout", function(){
    buttonLeave(thailand);
});

vietnambut.addEventListener("mouseover", function(){
    buttonHover(vietnam);
});

vietnambut.addEventListener("mouseout", function(){
    buttonLeave(vietnam);
});

japanbut.addEventListener("mouseover", function(){
    buttonHover(japan);
});

japanbut.addEventListener("mouseout", function(){
    buttonLeave(japan);
});

malaysiabut.addEventListener("mouseover", function(){
    buttonHover(malaysia);
});

malaysiabut.addEventListener("mouseout", function(){
    buttonLeave(malaysia);
});

afghanistanbut.addEventListener("mouseover", function(){
    buttonHover(afghanistan);
});

afghanistanbut.addEventListener("mouseout", function(){
    buttonLeave(afghanistan);
});

afghanistanbut.addEventListener("mouseover", function(){
    buttonHover(afghanistan);
});

afghanistanbut.addEventListener("mouseout", function(){
    buttonLeave(afghanistan);
});

bangladeshbut.addEventListener("mouseover", function(){
    buttonHover(bangladesh);
});

bangladeshbut.addEventListener("mouseout", function(){
    buttonLeave(bangladesh);
});

philippinesbut.addEventListener("mouseover", function(){
    buttonHover(philippines);
});

philippinesbut.addEventListener("mouseout", function(){
    buttonLeave(philippines);
});

srilankabut.addEventListener("mouseover", function(){
    buttonHover(srilanka);
});

srilankabut.addEventListener("mouseout", function(){
    buttonLeave(srilanka);
});

iranbut.addEventListener("mouseover", function(){
    buttonHover(iran);
});

iranbut.addEventListener("mouseout", function(){
    buttonLeave(iran);
});

indiabut.addEventListener("mouseover", function(){
    buttonHover(india);
});

indiabut.addEventListener("mouseout", function(){
    buttonLeave(india);
});

southkoreabut.addEventListener("mouseover", function(){
    buttonHover(southkorea);
});

southkoreabut.addEventListener("mouseout", function(){
    buttonLeave(southkorea);
});

myanmarbut.addEventListener("mouseover", function(){
    buttonHover(myanmar);
});

myanmarbut.addEventListener("mouseout", function(){
    buttonLeave(myanmar);
});

indonesiabut.addEventListener("mouseover", function(){
    buttonHover(indonesia);
});

indonesiabut.addEventListener("mouseout", function(){
    buttonLeave(indonesia);
});

taiwanbut.addEventListener("mouseover", function(){
    buttonHover(taiwan);
});

taiwanbut.addEventListener("mouseout", function(){
    buttonLeave(taiwan);
});

kazakhstanbut.addEventListener("mouseover", function(){
    buttonHover(kazakhstan);
});

kazakhstanbut.addEventListener("mouseout", function(){
    buttonLeave(kazakhstan);
});

northkoreabut.addEventListener("mouseover", function(){
    buttonHover(northkorea);
});

northkoreabut.addEventListener("mouseout", function(){
    buttonLeave(northkorea);
});

pakistanbut.addEventListener("mouseover", function(){
    buttonHover(pakistan);
});

pakistanbut.addEventListener("mouseout", function(){
    buttonLeave(pakistan);
});

chinabut.addEventListener("mouseover", function(){
    buttonHover(china);
});

chinabut.addEventListener("mouseout", function(){
    buttonLeave(china);
});

mongoliabut.addEventListener("mouseover", function(){
    buttonHover(mongolia);
});

mongoliabut.addEventListener("mouseout", function(){
    buttonLeave(mongolia);
});

chinabut.addEventListener("click", function(){
    quizableClick("china", "China");
});

vietnambut.addEventListener("click", function(){
    quizableClick("vietnam", "Vietnam");
});

japanbut.addEventListener("click", function(){
    quizableClick("japan", "Japan");
});

philippinesbut.addEventListener("click", function(){
    quizableClick("philippines", "Philippines");
});

indiabut.addEventListener("click", function(){
    countryClick("india", "India");
});

indonesiabut.addEventListener("click", function(){
    countryClick("indonesia", "Indonesia");
});

mongoliabut.addEventListener("click", function(){
    countryClick("mongolia", "Mongolia");
});

cambodiabut.addEventListener("click", function(){
    countryClick("cambodia", "Cambodia");
});

myanmarbut.addEventListener("click", function(){
    countryClick("myanmar", "Myanmar");
});

taiwanbut.addEventListener("click", function(){
    countryClick("taiwan", "Taiwan");
});

pakistanbut.addEventListener("click", function(){
    countryClick("pakistan", "Pakistan");
});

afghanistanbut.addEventListener("click", function(){
    countryClick("afghanistan", "Afghanistan");
});

bangladeshbut.addEventListener("click", function(){
    countryClick("bangladesh", "Bangladesh");
});

southkoreabut.addEventListener("click", function(){
    countryClick("southkorea", "South<br>Korea");
});

iranbut.addEventListener("click", function(){
    countryClick("iran", "Iran");
});

thailandbut.addEventListener("click", function(){
    countryClick("thailand", "Thailand");
});

srilankabut.addEventListener("click", function(){
    countryClick("srilanka", "Sri<br>Lanka");
});

kazakhstanbut.addEventListener("click", function(){
    countryClick("kazakhstan", "Kazakhstan");
});

northkoreabut.addEventListener("click", function(){
    countryClick("northkorea", "North<br>Korea");
});

malaysiabut.addEventListener("click", function(){
    countryClick("malaysia", "Malaysia");
});
