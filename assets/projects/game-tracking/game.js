/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
   const header = document.getElementById('header')
   window.scrollY >= 50
      ? header.classList.add('shadow-header')
      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUpEl = document.getElementById('scroll-up')
   window.scrollY >= 350
      ? scrollUpEl.classList.add('show-scroll')
      : scrollUpEl.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LIGHTBOX ===============*/
let lightboxImages = []
let lightboxIndex = 0

const buildImageList = () => {
   const activePanel = document.querySelector('.screenshots__panel.active')
   lightboxImages = [...activePanel.querySelectorAll('.screenshot__item img')]
      .map(img => img.src)
}

const openLightbox = (src) => {
   buildImageList()
   lightboxIndex = lightboxImages.indexOf(src)
   updateLightbox()
   document.getElementById('lightbox').classList.add('active')
}

const closeLightbox = () => {
   document.getElementById('lightbox').classList.remove('active')
}

const navigateLightbox = (dir) => {
   lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length
   updateLightbox()
}

const updateLightbox = () => {
   document.getElementById('lightbox-img').src = lightboxImages[lightboxIndex]
   document.getElementById('lightbox-counter').textContent =
      `${lightboxIndex + 1} / ${lightboxImages.length}`
}

document.getElementById('lightbox').addEventListener('click', (e) => {
   if (e.target === e.currentTarget) closeLightbox()
})

document.addEventListener('keydown', (e) => {
   if (!document.getElementById('lightbox').classList.contains('active')) return
   if (e.key === 'ArrowRight') navigateLightbox(1)
   if (e.key === 'ArrowLeft') navigateLightbox(-1)
   if (e.key === 'Escape') closeLightbox()
})

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2000,
})

sr.reveal('.hero__info, .back-cta__title, .back-cta__subtitle', {})
sr.reveal('.showcase__main', { delay: 200, origin: 'bottom' })
sr.reveal('.about-project__text, .feature__card', { interval: 100, origin: 'bottom' })
sr.reveal('#panel-dark .screenshot__item', { interval: 100, origin: 'bottom' })
sr.reveal('.video-wrapper', { delay: 200, origin: 'bottom' })

/*=============== SCREENSHOTS THEME TOGGLE ===============*/
const switchTheme = (theme) => {
   const darkBtn = document.getElementById('toggle-dark')
   const lightBtn = document.getElementById('toggle-light')
   const darkPanel = document.getElementById('panel-dark')
   const lightPanel = document.getElementById('panel-light')

   if (theme === 'dark') {
      darkBtn.classList.add('active')
      lightBtn.classList.remove('active')
      darkPanel.classList.add('active')
      lightPanel.classList.remove('active')
   } else {
      lightBtn.classList.add('active')
      darkBtn.classList.remove('active')
      lightPanel.classList.add('active')
      darkPanel.classList.remove('active')
   }
}