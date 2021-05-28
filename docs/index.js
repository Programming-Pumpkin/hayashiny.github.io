const index = Vue.createApp({
    created: function(){
        window.addEventListener('scroll', this.scrollTitle);
    },
    methods: {
        scrollFunc(){
            if(window.scrollY > (window.screen.height/2)){
                sliderImage.classList.add('active');
            }else{
                sliderImage.classList.remove('active');
            }
            //console.log(slideInAt);
        },
        scrollTitle(){
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
        }
    }
})

index.mount('#vueLink')


//regular js
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
        //console.log(slideInAt);
    })
}
window.addEventListener('scroll', debounce(slide));
