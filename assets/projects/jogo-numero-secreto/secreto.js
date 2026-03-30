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
      const openLightbox = (src) => {
         document.getElementById('lightbox-img').src = src
         document.getElementById('lightbox').classList.add('active')
      }
      const closeLightbox = () => {
         document.getElementById('lightbox').classList.remove('active')
      }
 
      /*=============== SCROLL REVEAL ===============*/
      const sr = ScrollReveal({
         origin: 'top',
         distance: '60px',
         duration: 2000,
      })
 
      sr.reveal('.hero__info, .back-cta__title, .back-cta__subtitle', {})
      sr.reveal('.showcase__main', { delay: 200, origin: 'bottom' })
      sr.reveal('.about-project__text, .feature__card', { interval: 100, origin: 'bottom' })
      sr.reveal('.screenshot__item', { interval: 100, origin: 'bottom' })
      sr.reveal('.video-wrapper', { delay: 200, origin: 'bottom' })