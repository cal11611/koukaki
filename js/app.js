// clouds
const observer = new IntersectionObserver ((entries) => {
    for (const entry of entries){
            if (entry.isIntersecting){
                entry.target.classList.add('go_nuages')                        
            }
            else{
                entry.target.classList.remove('go_nuages')
            }
       }
    }
)
observer.observe(document.querySelector(".big_cloud"))
observer.observe(document.querySelector(".little_cloud"))
// banner
const element = document.querySelector(".banner")
const element2 = document.querySelector(".banner_video")
window.onload = (event) => {
    element.setAttribute("class"," banner go")
    element2.setAttribute("class","banner_video banner_video_go")
    
};
// parties se chargeant au défilement
const parties = new IntersectionObserver ((entries) => {
    for (const entry of entries){
            if (entry.isIntersecting){
                entry.target.classList.add('story_ok')                        
            }
            
       }
    }
)
parties.observe(document.querySelector(".story"))
parties.observe(document.querySelector("#myCharacters"))
parties.observe(document.querySelector("#place"))
parties.observe(document.querySelector("#studio"))
parties.observe(document.querySelector(".oscars"))
// titres
const titres = new IntersectionObserver ((entries) => {
    for (const entry of entries){
            if (entry.isIntersecting){
                entry.target.classList.add('title_ok')                        
            }
            
       }
    }
)
titres.observe(document.querySelector(".story h2"))
titres.observe(document.querySelector("#myCharacters h3"))
titres.observe(document.querySelector("#place h3"))
titres.observe(document.querySelector("#studio h2"))
// characters
var swiper = new Swiper('.swiper-container',{
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 3000,
                },
                effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },          
});