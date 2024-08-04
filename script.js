

// Slider code begin...
const swiper = new Swiper('.swiper', {

    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
// Slider code ends...



const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if(bar)
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})

// feature sliding

