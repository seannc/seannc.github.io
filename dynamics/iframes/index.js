var ctrlinput = document.getElementById("ctrl"),
    frame = document.getElementById("frame");

function createvideo(){
    var newframe = document.createElement("iframe");
    newframe.className = "videos";
    var emblink = ctrlinput.value.replace("watch?v=", "embed/");
    newframe.src = emblink+"?autoplay=1";
    ctrlinput.value = "";
    document.getElementById("display").appendChild(newframe);
}

ctrlinput.addEventListener("keyup", function(ev){
    console.log(ev.keyCode);
    if(ev.keyCode == 13){
        //alert("Hi "+ctrlinput.value);
        //var emblink = ctrlinput.value.replace("watch?v=", "embed/")
        //frame.src = emblink;
        //ctrlinput.value = "";
        //ctrlinput.placeholder = "Type a new item here";
        //ctrlinput.type = "password";
        createvideo();
    }
});