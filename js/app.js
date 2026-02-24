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