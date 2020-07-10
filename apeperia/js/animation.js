const debounce = function(func,wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const tituloPlano = document.querySelector("[data-tituloPlanos]");
const plano = document.querySelectorAll(".plano");

function anime(){
    let windowTop = window.pageYOffset
    if(windowTop >= 742 && windowTop <= 1166 ||windowTop <= 1689 && windowTop >= 742){
        gsap.to(tituloPlano, 1, {            
            scale:1.1,            
        })
        gsap.to(plano,1,{
            scale: 1.1,            
        })
    }else{
        gsap.to(tituloPlano, 1, {            
            scale:1.0            
        })
        gsap.to(plano,1,{
            scale: 1.0            
        })
    }    
}
anime()

window.addEventListener('scroll', function(){
    anime();
})