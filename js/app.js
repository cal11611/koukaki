const observer = new IntersectionObserver ((entries) => {
    for (const entry of entries){
        console.log(
            entry.target,
            entry.isVisible
            )
            if (entry.isIntersecting){
                entry.target.classList.add('go')                        
            }
            else{
                entry.target.classList.remove('go')
            }
       }
    }
)
observer.observe(document.querySelector(".big_cloud"))
observer.observe(document.querySelector(".little_cloud"))

