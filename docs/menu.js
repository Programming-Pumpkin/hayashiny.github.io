var curMenu = '';
var height = 700;
var width = 300;

function setMenu(menu){
    if (menu != curMenu){
        console.log(curMenu, menu)
        document.getElementById(menu).style.display = "flex";
        if (curMenu){
            document.getElementById(curMenu).style.display = "none";
        }
        curMenu = menu;
    }
}

function navOpen(){
    var elemt = document.getElementById("navigation");
    var elemtIcon = document.getElementById("navigationIcon");

    if(parseInt(elemt.style.height) != height){
        elemt.style.height = height + "px";
        elemt.style.width = width + "px";
        elemtIcon.style.transform = "rotate(90deg)";
    }else{
        elemt.style.height = "70px";    
        elemt.style.width = "60px";
        elemtIcon.style.transform = "rotate(0deg)";    
    }
}

function scrollTitle(){
    var titleClass = document.getElementById('titleClass');        
    if(window.screen.width >= 320 && window.screen.width <= 812){
        if(window.scrollY > 100){
            titleClass.style.opacity = "0";
            titleClass.style.transform = "translate(-50%,200%)";
        }else{
            titleClass.style.transform = "translate(-50%,-50%)";
        titleClass.style.opacity = "1";
        }
    }else if(window.scrollY > 500){
        titleClass.style.opacity = "0";
        titleClass.style.transform = "translate(-50%,200%)";
    }else{
        titleClass.style.transform = "translate(-50%,-50%)";
        titleClass.style.opacity = "1";
    }
}

function disWidth(){
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);  
    var dis = document.getElementById("disclaimer");

    dis.style.width = vw/2 + "px";
}
