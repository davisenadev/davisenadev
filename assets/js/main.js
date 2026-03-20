/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/********** MENU SHOW **********/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/********** MENU HIDDEN **********/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_m6nat0a','template_sktlll2','#contact-form','-T_Zi2w9vDlQ1oULF')
    .then(() =>{
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true // Animations repeat
})

sr.reveal(`.home__content, .resume__content:nth-child(1), .footer__container`)
sr.reveal(`.home__data, .resume__content:nth-child(2)`, {delay: 400, origin: 'bottom'})

sr.reveal(`.about__content, .contact__content`, {origin: 'bottom'})
sr.reveal(`.about__image, .contact__form`, {delay: 300})

sr.reveal(`.projects__card`, {interval: 100})

/*=============== LANGUAGE TOGGLE ===============*/
const translations = {
  en: {
    // Nav
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-resume': 'Resume',
    'nav-contact': 'Contact',
    // Home
    'home-subtitle': "Hi, I'm a",
    'home-description': 'Junior <strong>FullStack Developer</strong> focused on scalable web applications. I work with <strong>Angular, NestJS and Node.js</strong>, writing clean code, integrating APIs and applying software engineering best practices.',
    'home-btn-cv': 'Download CV',
    'home-btn-projects': 'Projects',
    // About
    'about-title': 'About Me',
    'about-description': 'I\'m a <span class="about__highlight">Junior FullStack Developer at Grupo New Chase</span>, working on complete web applications. I use <strong>Angular, NestJS and Node.js</strong> to build scalable solutions with clean code and API integrations. Graduated in <strong>Systems Analysis and Development from UNIFACS</strong>.',
    'about-btn-contact': 'Contact Me',
    'about-skills-title': 'Skills',
    // Projects
    'projects-title': 'Projects',
    'projects-description-1': 'A simple game where the user tries to guess a randomly generated secret number, receiving hints like higher or lower until they get it right.',
    'projects-description-2': 'Game Tracking is a web page that lets you track your gaming progress across PS4, Xbox, PC, and Nintendo platforms.',
    'projects-btn': 'View Project',
    // Resume
    'resume-title': 'My Resume',
    'resume-exp': 'Experience',
    'resume-edu': 'Education',
    // Contact
    'contact-title': 'Contact Me',
    'contact-placeholder-name': 'Name',
    'contact-placeholder-email': 'Email',
    'contact-placeholder-message': 'Message',
    'contact-btn': 'Send Message',
  },
  pt: {
    // Nav
    'nav-home': 'Início',
    'nav-about': 'Sobre',
    'nav-projects': 'Projetos',
    'nav-resume': 'Currículo',
    'nav-contact': 'Contato',
    // Home
    'home-subtitle': 'Olá, eu sou',
    'home-description': 'Desenvolvedor <strong>FullStack Junior</strong> com foco em aplicações web escaláveis. Trabalho com <strong>Angular, NestJS e Node.js</strong>, escrevendo código limpo, realizando integração de APIs e aplicando boas práticas de engenharia de software.',
    'home-btn-cv': 'Baixar CV',
    'home-btn-projects': 'Projetos',
    // About
    'about-title': 'Sobre Mim',
    'about-description': 'Sou <span class="about__highlight">Programador Junior FullStack no Grupo New Chase</span>, atuando no desenvolvimento completo de aplicações web. Trabalho com <strong>Angular, NestJS e Node.js</strong>, criando soluções escaláveis com código limpo, integração de APIs e boas práticas de engenharia de software. Formado em <strong>Análise e Desenvolvimento de Sistemas pela UNIFACS</strong>.',
    'about-btn-contact': 'Fale Comigo',
    'about-skills-title': 'Habilidades',
    // Projects
    'projects-title': 'Projetos',
    'projects-description-1': 'Jogo simples onde o usuário tenta adivinhar um número secreto gerado aleatoriamente, recebendo dicas de maior ou menor até acertar.',
    'projects-description-2': 'Game Tracking é uma página web que permite acompanhar o progresso dos seus jogos nas plataformas PS4, Xbox, PC e Nintendo.',
    'projects-btn': 'Ver Projeto',
    // Resume
    'resume-title': 'Meu Currículo',
    'resume-exp': 'Experiência',
    'resume-edu': 'Educação',
    // Contact
    'contact-title': 'Fale Comigo',
    'contact-placeholder-name': 'Nome',
    'contact-placeholder-email': 'E-mail',
    'contact-placeholder-message': 'Mensagem',
    'contact-btn': 'Enviar Mensagem',
  }
}

let currentLang = 'en'

const applyTranslations = (lang) => {
  const t = translations[lang]

  // Nav links
  document.querySelector('a[href="#home"].nav__link').textContent = t['nav-home']
  document.querySelector('a[href="#about"].nav__link').textContent = t['nav-about']
  document.querySelector('a[href="#projects"].nav__link').textContent = t['nav-projects']
  document.querySelector('a[href="#resume"].nav__link').textContent = t['nav-resume']
  document.querySelector('a[href="#contact"].nav__link').textContent = t['nav-contact']

  // Home
  document.querySelector('.home__subtitle').innerHTML = `${t['home-subtitle']} <span id="home-typed"></span>`
  document.querySelector('.home__description').innerHTML = t['home-description']
  const [btnCV, btnProjects] = document.querySelectorAll('.home__buttons .button')
  btnCV.textContent = t['home-btn-cv']
  btnProjects.textContent = t['home-btn-projects']

  // About
  document.querySelector('.about__content .section__title').textContent = t['about-title']
  document.querySelector('.about__description').innerHTML = t['about-description']
  document.querySelector('.about__data .button').textContent = t['about-btn-contact']
  document.querySelector('.about__subtitle span').textContent = t['about-skills-title']

  // Projects
  document.querySelector('#projects .section__title').textContent = t['projects-title']
  document.querySelector('#projects-description-1').innerHTML = t['projects-description-1']
  document.querySelector('#projects-description-2').innerHTML = t['projects-description-2']
  document.querySelectorAll('.projects__data .button').forEach(btn => btn.textContent = t['projects-btn'])

  // Resume
  document.querySelector('#resume .section__title').textContent = t['resume-title']
  document.querySelector('.resume__content:nth-child(1) .resume__subtitle span').textContent = t['resume-exp']
  document.querySelector('.resume__content:nth-child(2) .resume__subtitle span').textContent = t['resume-edu']

  // Contact
  document.querySelector('#contact .section__title').textContent = t['contact-title']
  document.querySelector('input[name="user_name"]').placeholder = t['contact-placeholder-name']
  document.querySelector('input[name="user_email"]').placeholder = t['contact-placeholder-email']
  document.querySelector('textarea[name="user_message"]').placeholder = t['contact-placeholder-message']
  document.querySelector('#contact-form .button').textContent = t['contact-btn']

  // Restart Typed.js with new strings
  if (window.typedHome) window.typedHome.destroy()
  window.typedHome = new Typed('#home-typed', {
    strings: lang === 'en'
      ? ['Web Developer', 'FullStack Developer', 'Systems Analysis and Development']
      : ['Desenvolvedor Web', 'Desenvolvedor FullStack', 'Análise e Desenvolvimento de Sistemas'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
  })

  // Update button label
  document.getElementById('lang-label').textContent = lang === 'en' ? 'PT' : 'EN'
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'pt' : 'en'
  applyTranslations(currentLang)
})
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations('en')
})