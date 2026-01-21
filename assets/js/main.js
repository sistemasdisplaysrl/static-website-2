/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close");


// menu show
if (navToggle) {
   navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
   })
}

// menu hidden
if (navClose) {
   navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
   })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
   const navMenu = document.getElementById("nav-menu");
   // when we clik on each nav__link, we remove the show menu...
   navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));


/*=============== ADD BLUR HEADER ===============*/
const scrollHeader = () => {
   const header = document.getElementById("header");

   //add class if the bottom offset is greater than 50 of the ...
   this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
}

window.addEventListener("scroll", scrollHeader);


/*=============== CONTROL SCROLL UP BUTTON ===============*/
const scrollUpBtn = document.getElementById("scroll-up");

// Abrir modal de ubicación al hacer clic
if (scrollUpBtn) {
   scrollUpBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const locationModal = document.getElementById("locationModal");
      if (locationModal) {
         locationModal.classList.add("modal__open");
         document.body.classList.add("modal__lock__scroll");
         locationModal.removeAttribute("aria-hidden");
      }
   });
}

// Ocultar botón en sección de productos
const controlScrollUpVisibility = () => {
   const scrollUpBtn = document.getElementById("scroll-up");
   const productsSection = document.getElementById("display-products");

   if (!scrollUpBtn || !productsSection) return;

   const productsSectionTop = productsSection.offsetTop;
   const productsSectionBottom = productsSectionTop + productsSection.offsetHeight;
   const scrollPosition = window.scrollY + window.innerHeight / 2;

   if (scrollPosition >= productsSectionTop && scrollPosition <= productsSectionBottom) {
      scrollUpBtn.classList.add("hide-scroll");
   } else {
      scrollUpBtn.classList.remove("hide-scroll");
   }
}

window.addEventListener('scroll', controlScrollUpVisibility);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
   const scrollDown = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute('id'),
         sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      // console.log(sectionId);

      // console.log(sectionsClass);

      // los elementos del nav menu deben coincidir con las secciones presentes en el documento HTML para que este script funcione
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link');
      }
      else {
         sectionsClass.classList.remove('active-link');
      }
   })
}

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '80px',
   duration: 2500,
   delay: 300,
   // reset: true
});

sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer, .brands__quote, .brands__carousel, .section__title, .carousel__main, .location__card`)
sr.reveal(`.home__data, .care__list, .contact__img`, { delay: 500 });
sr.reveal(`.new__card`, { delay: 100 });
sr.reveal(`.shop__card`, { delay: 100 });





/*=============== VENTANA MODAL ===============*/
// const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');
const overlay = document.getElementById('modalOverlay');
const overlayBg = document.getElementById('overlayBg');
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');

function openModal() {
   overlay.classList.add('modal__open');
   document.body.classList.add('modal__lock__scroll');
   overlay.removeAttribute('aria-hidden');
}

function closeModal() {
   overlay.classList.remove('modal__open');
   document.body.classList.remove('modal__lock__scroll');
   overlay.setAttribute('aria-hidden', 'true');

   // Reset form after closing
   setTimeout(() => {
      form.reset();
      successMsg.style.display = 'none';
   }, 200);
}


const carouselSlider = document.querySelector('.carousel__slider');
const progressDots = document.querySelectorAll('.carousel__progress__dot');
let currentIndex = 1; // Empezamos en 1 porque el segundo item es el visible

function updateProgress() {
   progressDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
   });
}

function activateCarousel(e) {
   const items = document.querySelectorAll('.carousel__item');

   if (e.target.matches('.carousel__next') || e.target.closest('.carousel__next')) {
      carouselSlider.append(items[0]);
      currentIndex = (currentIndex + 1) % items.length;
      updateProgress();
   }

   if (e.target.matches('.carousel__prev') || e.target.closest('.carousel__prev')) {
      carouselSlider.prepend(items[items.length - 1]);
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateProgress();
   }
}

// Click en dots de progreso
progressDots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      const items = document.querySelectorAll('.carousel__item');
      const diff = index - currentIndex;

      if (diff > 0) {
         for (let i = 0; i < diff; i++) {
            carouselSlider.append(items[i]);
         }
      } else if (diff < 0) {
         for (let i = 0; i < Math.abs(diff); i++) {
            const allItems = document.querySelectorAll('.carousel__item');
            carouselSlider.prepend(allItems[allItems.length - 1]);
         }
      }

      currentIndex = index;
      updateProgress();
   });
});

document.addEventListener('click', activateCarousel, false);

// Auto-play opcional
// setInterval(() => {
//    const items = document.querySelectorAll('.carousel__item');
//    carouselSlider.append(items[0]);
//    currentIndex = (currentIndex + 1) % items.length;
//    updateProgress();
// }, 5000);



// Verificar si la tienda está abierta
function checkStoreStatus() {
   const now = new Date();
   const day = now.getDay();
   const hour = now.getHours();
   const minute = now.getMinutes();
   const currentTime = hour + minute / 60;

   const statusElement = document.getElementById('storeStatus');
   const statusText = document.getElementById('statusText');

   let isOpen = false;

   if (day >= 1 && day <= 5) {
      isOpen = currentTime >= 8.5 && currentTime < 19;
   } else if (day === 6) {
      isOpen = currentTime >= 9 && currentTime < 13;
   }

   if (isOpen) {
      statusElement.classList.remove('closed');
      statusElement.classList.add('open');
      statusText.textContent = 'Abierto ahora';
   } else {
      statusElement.classList.remove('open');
      statusElement.classList.add('closed');
      statusText.textContent = 'Cerrado';
   }
}

checkStoreStatus();
setInterval(checkStoreStatus, 60000);

function highlightCurrentDay() {
   const now = new Date();
   const day = now.getDay();
   const scheduleItems = document.querySelectorAll('.location__schedule__item');

   scheduleItems.forEach(item => item.classList.remove('today'));

   if (day >= 1 && day <= 5) {
      scheduleItems[0]?.classList.add('today');
   } else if (day === 6) {
      scheduleItems[1]?.classList.add('today');
   } else {
      scheduleItems[2]?.classList.add('today');
   }
}

highlightCurrentDay();