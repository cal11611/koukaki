// clouds

const elem1 = document.getElementById("myAnimation");
const elem2 = document.getElementById("myAnimation2");

let pos1 = 100;
let pos2 = 600;
const limit1 = 400;
const limit2 = 900;
 
let animActive = false;
let lastScrollY = window.pageYOffset;

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    animActive = entry.isIntersecting;
  }
});
observer.observe(document.querySelector("#place"));

window.addEventListener('scroll', () => {
  if (!animActive) return;

  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY) {
    pos1 = limit1;
    pos2 = limit2;
  } else if (currentScrollY < lastScrollY) {
    pos1 = 100;
    pos2 = 600;
  }

  elem1.style.right = pos1 + 'px';
  elem2.style.right = pos2 + 'px';

  lastScrollY = currentScrollY;
});

// banner
const element3 = document.querySelector(".banner")
const element4 = document.querySelector(".banner_video")
window.onload = (event) => {myMove()
  element3.setAttribute("class"," banner go")
  element4.setAttribute("class","banner_video banner_video_go")
}
var id = 0;
function myMove() {
  var elem = document.getElementById("myImg");   
  var pos = 460;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 280) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos + 'px'; 
    }
  }
}
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
            else {
              entry.target.classList.remove('title_ok')
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
// Menu
const links = document.querySelectorAll("nav li");
const div = document.getElementById("myDiv")

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
  div.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    div.classList.remove("active");
  });
});

