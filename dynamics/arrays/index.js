/*controls*/
var but1 = document.getElementById("but1"),
    but2 = document.getElementById("but2"),
    display = document.getElementById("display"),
    stats = document.getElementById("stats"),
    votes = []

function showClick(num){
    display.innerHTML = "You clicked on number "+num;
};

but1.addEventListener("click", function(){
    showClick(1);
    votes.push(1);
    console.log(votes);
});

but2.addEventListener("click", function(){
    showClick(2);
    votes.push(2);
    console.log(votes);
});

stats.addEventListener("click", function(){
    display.innerHTML = "<h3>The first vote is "+votes[0]+"</h3>";
    display.innerHTML += "<h3>The last vote is "+votes[votes.length-1]+"</h3>";
    
    var numvotes1 = 0,
        numvotes2 = 0;
    
    for(var i = 0; i<votes.length; i++){
        if(votes[i]==1){
            display.innerHTML += "<p>You voted for Justin Trudeau</p>";
            numvotes1++;
        } else if(votes[i]==2){
            display.innerHTML += "<p>You voted for Donald Trump</p>";
            numvotes2++;
        }
    }
    
    var total = numvotes1 + numvotes2;
    display.innerHTML += "<h3>Votes for Trudeau - "+numvotes1+"</h3>";
    display.innerHTML += "<h3>Votes for Trump - "+numvotes2+"</h3>";
    display.innerHTML += "<h2>Total Votes - "+total+"</h2>";
    
    var totaldiv = document.createElement("div");
    totaldiv.className = "bars";
    totaldiv.style.backgroundColor = "green";
    totaldiv.style.height = total*10+"px";
    
    var totaljus = document.createElement("div");
    totaljus.className = "bars";
    totaljus.style.backgroundColor = "red";
    totaljus.style.height = numvotes1*10+"px";
    
    var totaldon = document.createElement("div");
    totaldon.className = "bars";
    totaldon.style.backgroundColor = "blue";
    totaldon.style.height = numvotes2*10+"px";
    
    display.appendChild(totaljus);
    display.appendChild(totaldon);
    display.appendChild(totaldiv);
});