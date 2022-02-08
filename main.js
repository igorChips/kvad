let mini=document.querySelector(".kvad")
let shag=0
let left=0


function moveBot(){
    shag+=10
    if(shag>700){
        alert("no")
    }
    else{
        mini.style.top=shag+"px"
    }
    
}
function moveTop(){
    shag-=10
    if(shag<=0){
        alert("no")
    }
    else{
        mini.style.top=shag+"px"
    }
}
function moveRight(){
    left+=10
    if(left>700){
        alert("no")
    }
    else{
        mini.style.left=left+"px"
    }
}
function moveLeft(){
    left-=10
    if(left<0){
        alert("no")
    }
    else{
        mini.style.left=left+"px"
    }
}