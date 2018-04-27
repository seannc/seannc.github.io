	var uploadItems = localStorage.getItem("array");
	var display = document.getElementById("display");
	var background = document.getElementById("background");
	var title = document.getElementById("title");
	var desc = document.getElementById("desc");
	



	if(uploadItems){
	uploadItems = JSON.parse(uploadItems);
	}
	

var x=0;
var chosen =null;
	for(var i =0; i <uploadItems.length; i++){
		x++;
	var newDiv = document.createElement("div");
	var newTitle = document.createElement("div");
	var newImg = document.createElement("img");
	var newDesc = document.createElement("div");
	newDiv.appendChild(newTitle);
	newDiv.appendChild(newImg);
	newDiv.appendChild(newDesc);
	newDiv.id="div"+x;
	newTitle.id="title"+x;
	newDesc.id="desc"+x;
	newImg.id="img"+x;
	display.appendChild(newDiv);
	newDiv.className = "newDiv";
	newTitle.className = "newTitle";
	newDesc.className = "newDesc";
	newImg.className = "newImg";
	newImg.src = uploadItems[i].myimg;
	newTitle.innerHTML = uploadItems[i].mytitle;
	newDesc.innerHTML = uploadItems[i].mydesc;
	}
	


	
	// var descBox =null;
	// var imglink =null;
	for(var j =1; j<uploadItems.length+1;j++){
	document.getElementById("img"+j).addEventListener("mouseover", function(){
		// var titleBox = document.getElementById("title"+i);
		// var descBox = document.getElementById("desc"+i);
		// var imglink = document.getElementById("img"+j);
	
	
		background.style.backgroundImage ="url("+document.getElementById("img"+j).src+")";
		// title.innerHTML = newTitle.innerHTML;
		// desc.innerHTML = newDesc.innerHTML;
	})
}
// for(var j =0; j<uploadItems.length, j++){


// document.getElementById("div"+(j+1)).addEventListener("click", function(){

// 		document.getElementById("div"+(j+1)).style.display="none";
// 	})

// }


	var random = Math.round(Math.random()*(uploadItems.length-1));
	console.log(random)
	background.style.backgroundImage ="url("+uploadItems[random].myimg+")";
	title.innerHTML = uploadItems[random].mytitle;
	desc.innerHTML = uploadItems[random].mydesc;
	

// function showImg(){
// 	for(var i =0; i <uploadItems.length; i++){
// 	var newDiv = document.createElement("div");
// 	var newTitle = document.createElement("div");
// 	var newImg = document.createElement("img");
// 	var newDesc = document.createElement("div");
// 	newDiv.appendChild(newTitle);
// 	newDiv.appendChild(newImg);
// 	newDiv.appendChild(newDesc);

// 	display.appendChild(newDiv);
// 	newDiv.className = "newDiv";
// 	newTitle.className = "newTitle";
// 	newDesc.className = "newDesc";
// 	newImg.className = "newImg";
// 	newImg.src = uploadItems[i].lastimg;
// 	newTitle.innerHTML = uploadItems[i].lasttitle;
// 	newDesc.innerHTML = uploadItems[i].lastdesc;

// }
// }