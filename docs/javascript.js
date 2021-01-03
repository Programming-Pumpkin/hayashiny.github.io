var height = document.getElementById("navigation").offsetHeight;
var width = document.getElementById("navigation").offsetWidth;
var bodyRef = document.body;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function debounce(func, wait=5, immediate = true){
    var timeout;
    return function(){
        var context =this, args = arguments;
        var later = function(){
            timeout = null;
            if (!immediate) func.apply(context,args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slideIn');
function slide(e){
    sliderImages.forEach(sliderImage =>{
        const slideInAt = (window.scrollY + window.innerHeight);
            sliderImage.height/2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }
        console.log(slideInAt);
    })
}
window.addEventListener('scroll', debounce(slide));

function scrollFunc(){
    var titleClass = document.getElementById('titleClass');
    var navigationClass = document.getElementById("navigation");

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
    
    if(window.scrollY >= 1000){
        if(window.screen.width >= 1300){
            navigationClass.style.position = "fixed";
            navigationClass.style.top = "0px"
            navigationClass.style.margin = "18px 0px 0px"
        }else{
            navigationClass.style.position = "absolute";
            navigationClass.style.top = "auto"
            navigationClass.style.margin = "18px 0px 0px"
        }
    }else{
        navigationClass.style.position = "absolute";
        navigationClass.style.top = "auto";
        navigationClass.style.marginTop = "18px";
    }

    //console.log(window.scrollY);
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
    
    //console.log(elemt.offsetHeight);
    //console.log(height);
}

const iframe = document.getElementById('iframe');
const loadText = document.getElementById('loadText');

function setURL(url){
    document.getElementById('iframe').src = url;
    loadText.style.display = "";
}

iframe.addEventListener("load",function(){
    loadText.style.display = "none";
    var adjustedHeight = iframe.contentWindow.document.body.scrollHeight + 50;
    if(window.screen.width < 1000){
        iframe.style.height = adjustedHeight + "px";
        bodyRef.style.height = 1000 + adjustedHeight + "px";
    }else{
        iframe.style.height = adjustedHeight + "px";
    }

    //console.log("Body: " + document.body.style.height);
    //console.log("AdjustHeight: " + adjustedHeight);
    //console.log("iFrameHeight: " + iframe.style.height);
})

