var curMenu = 'appetizer';
var height = document.getElementById("navigation").offsetHeight;
var width = document.getElementById("navigation").offsetWidth;

const menuApp = Vue.createApp({
    created: function(){
        window.addEventListener('scroll', this.scrollFunc);
        window.addEventListener('scroll', this.scrollTitle);
        window.addEventListener('load', this.navOpen);
        window.addEventListener('resize', this.disWidth);
    },
    mounted: function(){
        var childNodes = document.getElementById("menus").childNodes;
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);  
        var dis = document.getElementById("disclaimer");
        for (var x = 0; x < childNodes.length; x++){
            if (x != 1){
                childNodes[x].style.display = "none";
            }
        }

        dis.style.width = vw/1.5 + "px";
    },
    methods: {
        setMenu(menu){
            if (menu != curMenu){
                document.getElementById(menu).style.display = "flex";
                document.getElementById(curMenu).style.display = "none";
                curMenu = menu;
            }
        },
        navOpen(){
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
        },
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
        },
        disWidth(){
            var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);  
            var dis = document.getElementById("disclaimer");

            dis.style.width = vw/2 + "px";
        }
    }
})

menuApp.mount('#vueLink')