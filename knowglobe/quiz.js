var q1 = document.getElementById("q1"),
    q2 = document.getElementById("q2"),
    q3 = document.getElementById("q3"),
    q4 = document.getElementById("q4"),
    q5 = document.getElementById("q5"),
    q6 = document.getElementById("q6"),
    q7 = document.getElementById("q7"),
    q9 = document.getElementById("q9"),
    start = document.getElementById("start"),
    end = document.getElementById("end")

var q1c = document.getElementById("q1c"),
    q1x = document.getElementById("q1x"),
    q1y = document.getElementById("q1y"),
    q1z = document.getElementById("q1z")

var q2c = document.getElementById("q2c"),
    q2x = document.getElementById("q2x"),
    q2y = document.getElementById("q2y"),
    q2z = document.getElementById("q2z")

var q3c = document.getElementById("q3c"),
    q3x = document.getElementById("q3x")

var q4c = document.getElementById("q4c"),
    q4x = document.getElementById("q4x"),
    q4y = document.getElementById("q4y"),
    q4z = document.getElementById("q4z")

var q5c = document.getElementById("q5c"),
    q5x = document.getElementById("q5x"),
    q5y = document.getElementById("q5y"),
    q5z = document.getElementById("q5z")

var q6c = document.getElementById("q6c"),
    q6x = document.getElementById("q6x"),
    q6y = document.getElementById("q6y"),
    q6z = document.getElementById("q6z")

var q7c = document.getElementById("q7c"),
    q7x = document.getElementById("q7x")

var q8c = document.getElementById("q8c"),
    q8x = document.getElementById("q8x"),
    q8y = document.getElementById("q8y"),
    q8z = document.getElementById("q8z")

var score = 0,
    exc = document.getElementById("exc"),
    scoredisplay = document.getElementById("scoredisplay")

start.addEventListener("click", function(){
    start.style.left = "-700px";
    start.style.opacity = "0";
    start.style.visibility = "hidden";
    
    q1.style.left = "0px";
    q1.style.opacity = "1";
    q1.style.visibility = "visible";
});

function rightAnswer(current, next){
    current.style.left = "-700px";
    current.style.opacity = "0";
    current.style.visibility = "hidden";
    current.style.zIndex = "-1";
    
    next.style.left = "0px";
    next.style.opacity = "1";
    next.style.visibility = "visible";
    next.style.zIndex = "2";
    
    score++;
    console.log(score);
}

function wrongAnswer(current, next){
    current.style.left = "-700px";
    current.style.opacity = "0";
    current.style.visibility = "hidden";
    current.style.zIndex = "-1";
    
    next.style.left = "0px";
    next.style.opacity = "1";
    next.style.visibility = "visible";
    next.style.zIndex = "2";

    
    console.log(score);
}

function lastQuestion(){
    scoredisplay.innerHTML = score+"/8";
    
    if(score == 8){
        exc.innerHTML = "Perfect!"
    } else if(score == 7){
        exc.innerHTML = "Great!"
    } else if(score == 6){
        exc.innerHTML = "Good Job!"
    } else if (score == 5){
        exc.innerHTML = "Not Bad!"
    } else {
        exc.innerHTML = "You should go back and <a href='../study.html'>study!</a>"
    }
}

q1c.addEventListener("click", function(){rightAnswer(q1, q2);})
q1x.addEventListener("click", function(){wrongAnswer(q1, q2);})
q1y.addEventListener("click", function(){wrongAnswer(q1, q2);})
q1z.addEventListener("click", function(){wrongAnswer(q1, q2);})

q2c.addEventListener("click", function(){rightAnswer(q2, q3);})
q2x.addEventListener("click", function(){wrongAnswer(q2, q3);})
q2y.addEventListener("click", function(){wrongAnswer(q2, q3);})
q2z.addEventListener("click", function(){wrongAnswer(q2, q3);})

q3c.addEventListener("click", function(){rightAnswer(q3, q4);})
q3x.addEventListener("click", function(){wrongAnswer(q3, q4);})

q4c.addEventListener("click", function(){rightAnswer(q4, q5);})
q4x.addEventListener("click", function(){wrongAnswer(q4, q5);})
q4y.addEventListener("click", function(){wrongAnswer(q4, q5);})
q4z.addEventListener("click", function(){wrongAnswer(q4, q5);})

q5c.addEventListener("click", function(){rightAnswer(q5, q6);})
q5x.addEventListener("click", function(){wrongAnswer(q5, q6);})
q5y.addEventListener("click", function(){wrongAnswer(q5, q6);})
q5z.addEventListener("click", function(){wrongAnswer(q5, q6);})

q6c.addEventListener("click", function(){rightAnswer(q6, q7);})
q6x.addEventListener("click", function(){wrongAnswer(q6, q7);})
q6y.addEventListener("click", function(){wrongAnswer(q6, q7);})
q6z.addEventListener("click", function(){wrongAnswer(q6, q7);})

q7c.addEventListener("click", function(){rightAnswer(q7, q8);})
q7x.addEventListener("click", function(){wrongAnswer(q7, q8);})

q8c.addEventListener("click", function(){rightAnswer(q8, end);lastQuestion();})
q8x.addEventListener("click", function(){wrongAnswer(q8, end);lastQuestion();})
q8y.addEventListener("click", function(){wrongAnswer(q8, end);lastQuestion();})
q8z.addEventListener("click", function(){wrongAnswer(q8, end);lastQuestion();})

document.getElementById("restart").addEventListener("click", function(){
    location.reload();
});