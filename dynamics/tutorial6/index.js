var preview = document.getElementById("previewbox"),
    redrange = document.getElementById("redrange"),
    greenrange = document.getElementById("greenrange"),
    bluerange = document.getElementById("bluerange"),
    display = document.getElementById("display"),
    //redarr = [],
    //greenarr = [],
    //bluearr = [],
    colourarr = []

function changeColour(){
    preview.style.backgroundColor = "rgb("+redrange.value+","+greenrange.value+","+bluerange.value+")";
}

function pushColours(){
    //redarr.push(parseInt(redrange.value));
    //greenarr.push(parseInt(greenrange.value));
    //bluearr.push(parseInt(bluerange.value));
    
    var obj = {
        red:parseInt(redrange.value),
        green:parseInt(greenrange.value),
        blue:parseInt(bluerange.value)
    }
    
    colourarr.push(obj);
}

function popColours(){
    //redarr.pop();
    //greenarr.pop();
    //bluearr.pop();
    colourarr.pop();
}

function shiftColours(){
    //redarr.shift();
    //greenarr.shift();
    //bluearr.shift();
    colourarr.shift();
}

function spliceColours(){
    var startindex = document.getElementById("spliceindex").value;
    
    //redarr.splice(startindex, 1);
    //greenarr.splice(startindex, 1);
    //bluearr.splice(startindex, 1);
    colourarr.splice(startindex, 1);
    
    //redarr.splice(1, 2)
    // 1 = starting number
    // 2 = number of items to remove
}

function createSwatch(){
    
    /*var ndiv = document.createElement("div");
    ndiv.style.backgroundColor = preview.style.backgroundColor;
    ndiv.className = "swatches";
    display.appendChild(ndiv);*/
    
    display.innerHTML = "";
    /*for(var i = 0; i<redarr.length; i++){
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb("+redarr[i]+", "+greenarr[i]+", "+bluearr[i]+")";
        ndiv.className = "swatches";
        display.appendChild(ndiv);
    }*/
    
    for(var i = 0; i<colourarr.length; i++){
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb("+colourarr[i].red+", "+colourarr[i].green+", "+colourarr[i].blue+")";
        ndiv.className = "swatches";
        display.appendChild(ndiv);
    }

    
    console.log(colourarr);
    calcAvg();
    calcSum();
}

function calcAvg(){
    var totalred = 0,
        totalgreen = 0,
        totalblue = 0;
    
    for(var i = 0; i<colourarr.length; i++){
        totalred = totalred + colourarr[i].red;
        totalgreen = totalgreen + colourarr[i].green;
        totalblue = totalblue + colourarr[i].blue;
    }
    
    var roundred = Math.round(totalred/colourarr.length);
    var roundgreen = Math.round(totalgreen/colourarr.length);
    var roundblue = Math.round(totalblue/colourarr.length);
    
    document.getElementById("averagebox").style.backgroundColor = "rgb("+roundred+","+roundgreen+","+roundblue+")";
    
    console.log(roundred, roundgreen, roundblue);
}
    
function calcAvgBACKUP(){
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
    for(var i = 0; i<colourarr.length; i++){
        totalred = totalred + colourarr[i].red;
        totalgreen = totalgreen + colourarr[i].green;
        totalblue = totalblue + colourarr[i].blue;
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
    pushColours();
    createSwatch();
});

//DELETES LAST ITEM IN ARRAY
document.getElementById("popcolour").addEventListener("click", function(){
    popColours();
    createSwatch();
});

//DELETES FIRST ITEM IN ARRAY
document.getElementById("shiftcolour").addEventListener("click", function(){
    shiftColours();
    createSwatch();
});

document.getElementById("splicecolour").addEventListener("click", function(){
    spliceColours();
    createSwatch();
}); 