var menu = document.getElementById("menu"),
	controls = document.getElementById('controls'),
	display = document.getElementById("display"),
	lastImg = document.getElementById("lastImg"),
	create = document.getElementById("create"),
	url = document.getElementById("url"),
	title = document.getElementById("title"),
	desc = document.getElementById("desc"),
	search = document.getElementById("search");


menu.addEventListener("click", function(){
	changePos(menu, controls)
	
})

controls.addEventListener("click", function(){
	changePos(controls, menu)
})

function changePos(c,m){
if(c.style.left =="0"){
		m.style.left="-140px";
	}
	else{
		
		c.style.left ="0";
		m.style.left="-140px";
	}	
}



var divArr = []; //LEVEL 2b
var x =0;//LEVEL 2b
create.addEventListener("click", function(){
// x++;
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
// 	// newTitle.innerHTML = title.value;
// 	// newDesc.innerHTML = desc.value;
// 	// newImg.src = url.value;
	
// //LEVEL 2b + 3a
// 	var myDiv = {
// 		mytitle: title.value,
// 		myimg: url.value,
// 		mydesc: desc.value
// 	}


// 	divArr.push(myDiv);//LEVEL 2b
// 	console.log(divArr);//LEVEL 2b


// 	newTitle.innerHTML = myDiv.mytitle;
// 	newDesc.innerHTML = myDiv.mydesc;
// 	newImg.src = myDiv.myimg;

// 	console.log(x);
	// if(title.value==""){
	// 	newTitle.innerHTML=divArr[x-1].mytitle;
	// }
	// if(url.value==""){
	// 	newImg.src=divArr[x-1].myimg;
	// }
	// if(desc.value==""){
	// 	newDesc.innerHTML=divArr[x-1].mydesc;
	// }
	// // newDiv.innerHTML = divArr[x-1].innerHTML;
	// if(x==3){  //RESET
	// 	x=1;
	// }

	createImage(url.value, title.value, desc.value);

	// if(x==1){

	// 	newDiv.innerHTML = divArr[0].innerHTML;	
	// }
	// else if(x==2){

	// 	newDiv.innerHTML = divArr[1].innerHTML;	
	// }
	// else if(x==3){
	// 	x=0;
	// 	newDiv.innerHTML = divArr[2].innerHTML;	
	// }

})
//LEVEL 3b
function createImage(iUrl, iTitle, iDesc){
	x++;
	var newDiv = document.createElement("div");
	var newTitle = document.createElement("div");
	var newImg = document.createElement("img");
	var newDesc = document.createElement("div");
	newDiv.appendChild(newTitle);
	newDiv.appendChild(newImg);
	newDiv.appendChild(newDesc);

	display.appendChild(newDiv);
	newDiv.className = "newDiv";
	newTitle.className = "newTitle";
	newDesc.className = "newDesc";
	newImg.className = "newImg";
	newTitle.innerHTML = title.value;
	newDesc.innerHTML = desc.value;
	newImg.src = url.value;
	
	// newTitle.innerHTML = "title"+x;
	// newDesc.innerHTML = "desc"+x;
	// newImg.src ="imgs/default"+x+".jpg";

	console.log(divArr);
//LEVEL 2b + 3a + LEVEL 4a
	var myDiv = {
		mytitle: iTitle,
		myimg: iUrl,
		mydesc: iDesc
	}


	

	newTitle.innerHTML = myDiv.mytitle;
	newDesc.innerHTML = myDiv.mydesc;
	newImg.src = myDiv.myimg;

	console.log(x);
	// if(title.value==""){
	// 	newTitle.innerHTML=divArr[x-1].mytitle;
	// }
	// if(url.value==""){
	// 	newImg.src=divArr[x-1].myimg;
	// }
	// if(desc.value==""){
	// 	newDesc.innerHTML=divArr[x-1].mydesc;
	// }
	// // newDiv.innerHTML = divArr[x-1].innerHTML;
	if(x>3){  //RESET
		x=1;
	}
	if(iUrl==""){
		myDiv.myimg = newImg.src="imgs/default"+x+".jpg";

		// newImg.src=divArr[x-1].myimg;
	}
	if(iTitle==""){
		myDiv.mytitle = newTitle.innerHTML="title"+x;

		// newTitle.innerHTML=divArr[x-1].mytitle;
	}
	if(iDesc==""){
		myDiv.mydesc = newDesc.innerHTML="desc"+x;

		// newDesc.innerHTML=divArr[x-1].mydesc;
	}
	divArr.push(myDiv);//LEVEL 2b
	console.log(divArr);//LEVEL 2b


}

search.addEventListener("keyup", function(ev){
	if(ev.keyCode=="13"){
		display.innerHTML="";
		for(var i=0; i<divArr.length; i++){
			// if(divArr[i].mytitle == search.value){
			if(divArr[i].mytitle.indexOf(search.value) >= 0){	//BONUS
			createImage();
			}

// if (divArr[i].mytitle.indexOf(search.value) >= 0)


	function createImage(){
	var newDiv = document.createElement("div");
	var newTitle = document.createElement("div");
	var newImg = document.createElement("img");
	var newDesc = document.createElement("div");
	newDiv.appendChild(newTitle);
	newDiv.appendChild(newImg);
	newDiv.appendChild(newDesc);

	display.appendChild(newDiv);
	newDiv.className = "newDiv";
	newTitle.className = "newTitle";
	newDesc.className = "newDesc";
	newImg.className = "newImg";
	newTitle.innerHTML = divArr[i].mytitle;
	newDesc.innerHTML = divArr[i].mydesc;
	newImg.src = divArr[i].myimg;


	} //close function createImg
	} //close loop
	} //close event
})

lastImg.addEventListener("click", function(){
	var myLastItem = {
		lasttitle: divArr[divArr.length - 1].mytitle ,
		lastimg: divArr[divArr.length - 1].myimg,
		lastdesc: divArr[divArr.length - 1].mydesc
	}
	
	localStorage.setItem("last", JSON.stringify(myLastItem));
	localStorage.setItem("array", JSON.stringify(divArr));
})


