var preview = document.getElementById("previewbox"),
    redrange = document.getElementById("redrange"),
    greenrange = document.getElementById("greenrange"),
    bluerange = document.getElementById("bluerange"),
    display = document.getElementById("display"),
    redarr = [],
    greenarr = [],
    bluearr = []

function changeColour(){
    preview.style.backgroundColor = "rgb("+redrange.value+","+greenrange.value+","+bluerange.value+")";
}

function createSwatch(){
    var ndiv = document.createElement("div");
    ndiv.style.backgroundColor = preview.style.backgroundColor;
    ndiv.className = "swatches";
    display.appendChild(ndiv);
    
    redarr.push(parseInt(redrange.value));
    greenarr.push(parseInt(greenrange.value));
    bluearr.push(parseInt(bluerange.value));
    
    console.log(redarr, greenarr, bluearr);
    calcAvg();
    calcSum();
}

function calcAvg(){
    //LESS EFFICIENT
    //RED
    var total = 0;
    for(var i = 0; i<redarr.length; i++){
        total = total + redarr[i];
    }
    
    var avg = total/redarr.length;
    var roundred = Math.round(avg);
    
    //RESET VAR
    total = 0;
    
    //GREEN
    var total = 0;
    for(var i = 0; i<greenarr.length; i++){
        total = total + greenarr[i];
    }
    
    var avg = total/greenarr.length;
    var roundgreen = Math.round(avg);
    
    total = 0;
    
    //BLUE
    var total = 0;
    for(var i = 0; i<bluearr.length; i++){
        total = total + bluearr[i];
    }
    
    var avg = total/bluearr.length;
    var roundblue = Math.round(avg);
    
    document.getElementById("averagebox").style.backgroundColor = "rgb("+roundred+","+roundgreen+","+roundblue+")";
    
    console.log(roundred, roundgreen, roundblue);
}

function calcSum() {
    //MORE EFFICIENT
    var totalred = 0,
        totalgreen = 0,
        totalblue = 0
    
    //INDEX IS RE USED BECAUSE ALL ARRAYS HAVE THE SAME LENGTH
    for(var i = 0; i<redarr.length; i++){
        totalred = totalred + redarr[i];
        totalgreen = totalgreen + greenarr[i];
        totalblue = totalblue + bluearr[i];
        if(totalred > 255){
            totalred = 255;
        }
        if(totalgreen > 255){
            totalgreen = 255;
        }
        if(totalblue > 255){
            totalblue = 255;
        }
    }
    
    document.getElementById("mixbox").style.backgroundColor = "rgb("+totalred+","+totalgreen+","+totalblue+")";
    
    console.log(totalred, totalgreen, totalblue)
}

redrange.addEventListener("change", function(){
    changeColour();
});

greenrange.addEventListener("change", function(){
    changeColour();
});

bluerange.addEventListener("change", function(){
    changeColour();
});

document.getElementById("addcolour").addEventListener("click", function(){
    createSwatch();
});