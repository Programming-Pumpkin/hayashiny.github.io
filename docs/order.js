const order = Vue.createApp({
    created: function(){
        window.addEventListener('scroll', this.scrollTitle);
    },
    methods: {
        scrollTitle(){
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

            console.log(window.scrollY);
        }
    }
})

order.mount('#vueLink')