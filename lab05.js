var winner = Math.round(Math.random()*100)
var num = document.getElementById("num")
var display = document.getElementById("display")
var score = 100

document.getElementById("guess").addEventListener("click", function(){
    console.log(num.value)
    var realnum = parseInt(num.value);
    if(realnum== winner){
        display.innerText = "Correct - Score: "+score;
    } else {
        if(realnum > winner){
            display.innerHTML = "Too Big";
    } else if(realnum < winner){
        display.innerHTML = "Too Small";
    }
        score = score - 1;
    }
});
document.getElementById("display").addEventListener("mousemove", function(){
    var red = Math.round(Math.random()*255)
    var blue = Math.round(Math.random()*255)
    var green = Math.round(Math.random()*255)
    display.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
});