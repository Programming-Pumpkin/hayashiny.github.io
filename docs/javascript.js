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

    if(window.scrollY > 500){
        titleClass.style.opacity = "0";
        titleClass.style.transform = "translate(-50%,200%)";
    }else{
        titleClass.style.transform = "translate(-50%,-50%)";
        titleClass.style.opacity = "1";
    }
    
    //console.log();
};

function navOpen(){
    var elemt = document.getElementById("navigation");
    var elemtIcon = document.getElementById("navigationIcon");

    if(elemt.style.height != "500px"){
        elemt.style.height = "500px";
        elemtIcon.style.transform = "rotate(90deg) translate(0px,0px)";
    }else{
        elemt.style.height = "70px";    
        elemtIcon.style.transform = "rotate(0deg) translate(0px,-2px)";
    } 
}
