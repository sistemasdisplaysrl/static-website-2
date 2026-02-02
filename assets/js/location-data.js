// ============================================
// CONFIGURACIÓN DE DATOS POR CIUDAD
// ============================================

const CITY_DATA = {
  "La Paz": {
    // Datos de contacto
    phone: "+591 71202964",
    email: "ventas.lpz@displayimportador.com",
    whatsappNumber: "59171202964",

    // Dirección
    address: {
      street: "Calle Calatayud N° 660",
      zone: "Zona Max Paredes",
      city: "La Paz",
      country: "Bolivia",
    },

    // Enlaces de redes sociales/contacto
    links: {
      whatsapp:
        "https://wa.me/59171202964?text=Hola%20quiero%20más%20información",
      whatsappLong:
        "https://wa.me/59171202964?text=Hola%2C%20quisiera%20información%20sobre%20sus%20productos",
      telegram: "https://t.me/display_sistemas",
      messenger: "https://m.me/DISPLAYIMPORTADOR",
      googleMaps:
        "https://www.google.com/maps/dir//Display+Importadora/@-16.494505,-68.1482199,19z",
    },

    // Mapa iframe
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.4062993687432!2d-68.14821996323994!3d-16.494505333953363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8b6ec0d459%3A0x948482aea6eedef9!2sDisplay%20Importadora!5e0!3m2!1ses!2sbo!4v1768490527142!5m2!1ses!2sbo",

    // Horarios
    schedule: {
      weekdays: "8:30 - 19:00",
      saturday: "9:00 - 13:00",
      sunday: "Cerrado",
    },
  },

  Cochabamba: {
    phone: "+591 63845057",
    email: "ventas.cbba@displayimportador.com",
    whatsappNumber: "59163845057",

    address: {
      street: "Av. América N° 1234",
      zone: "Zona Central",
      city: "Cochabamba",
      country: "Bolivia",
    },

    links: {
      whatsapp:
        "https://wa.me/59163845057?text=Hola%20quiero%20más%20información",
      whatsappLong:
        "https://wa.me/59163845057?text=Hola%2C%20quisiera%20información%20sobre%20sus%20productos",
      telegram: "https://t.me/display_cbba",
      messenger: "https://m.me/DISPLAYCBBA",
      googleMaps:
        "https://www.google.com/maps/dir//Display+Importadora+Cochabamba/@-17.404862764670646,-66.1584360240763,17z",
    },

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1442695548353!2d-66.1584360240763!3d-17.404862764670646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373de4ce5a7ed%3A0xf71b41c10dd96876!2sDisplay%20Importadora!5e0!3m2!1ses!2sbo!4v1768490593657!5m2!1ses!2sbo",

    schedule: {
      weekdays: "8:30 - 19:00",
      saturday: "9:00 - 13:00",
      sunday: "Cerrado",
    },
  },

  "Santa Cruz": {
    phone: "+591 63438366",
    email: "ventas.scz@displayimportador.com",
    whatsappNumber: "59163438366",

    address: {
      street: "Calle Sucre N° 567",
      zone: "Zona Equipetrol",
      city: "Santa Cruz",
      country: "Bolivia",
    },

    links: {
      whatsapp:
        "https://wa.me/59163438366?text=Hola%20quiero%20más%20información",
      whatsappLong:
        "https://wa.me/59163438366?text=Hola%2C%20quisiera%20información%20sobre%20sus%20productos",
      telegram: "https://t.me/display_scz",
      messenger: "https://m.me/DISPLAYSCZ",
      googleMaps:
        "https://www.google.com/maps/dir//Display+Importadora+Santa+Cruz/@-17.79033567526387,-63.208354324067386,17z",
    },

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0289672112663!2d-63.208354324067386!3d-17.79033567526387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1c3bca72ea881%3A0xcf7cba51af596ff9!2sDisplay%20Importadora!5e0!3m2!1ses!2sbo!4v1768490634161!5m2!1ses!2sbo",

    schedule: {
      weekdays: "8:30 - 19:00",
      saturday: "9:00 - 13:00",
      sunday: "Cerrado",
    },
  },
};

// ============================================
// FUNCIÓN PARA ACTUALIZAR TODO EL CONTENIDO
// ============================================

function updatePageContent(city) {
  const data = CITY_DATA[city];

  if (!data) {
    console.error(`No hay datos para la ciudad: ${city}`);
    return;
  }

  // ============================================
  // MODAL DE CONTACTO (contact-1)
  // ============================================
  const modalContact = document.getElementById("contact-1");
  if (modalContact) {
    modalContact.innerHTML = `
         <div class="modal__contact__buttons">
            <a href="${data.links.whatsapp}" target="_blank"
               class="modal__contact__btn modal__contact__btn__whatsapp">
               <i class="fa-brands fa-whatsapp"></i>
               <span class="modal__contact__btn__label">WhatsApp</span>
            </a>
            <a href="mailto:${data.email}" target="_blank"
               class="modal__contact__btn modal__contact__btn__email">
               <i class="fa-solid fa-envelope"></i>
               <span class="modal__contact__btn__label">Correo</span>
            </a>
            <a href="${data.links.telegram}" target="_blank"
               class="modal__contact__btn modal__contact__btn__telegram">
               <i class="fa-brands fa-telegram"></i>
               <span class="modal__contact__btn__label">Telegram</span>
            </a>
            <a href="${data.links.messenger}" target="_blank"
               class="modal__contact__btn modal__contact__btn__messenger">
               <i class="fa-brands fa-facebook-messenger"></i>
               <span class="modal__contact__btn__label">Messenger</span>
            </a>
         </div>
      `;
  }

  // ============================================
  // HEADER DE UBICACIÓN (location-1)
  // ============================================
  const locationHeader = document.getElementById("location-1");
  if (locationHeader) {
    locationHeader.innerHTML = `
         <h2>Nuestra Ubicación</h2>
         <p>Encuéntranos en ${city}, Bolivia</p>
      `;
  }

  // ============================================
  // DIRECCIÓN (location-2)
  // ============================================
  const locationAddress = document.getElementById("location-2");
  if (locationAddress) {
    locationAddress.innerHTML = `
         <div class="location__detail__icon">
            <i class="ri-map-pin-line"></i>
         </div>
         <div class="location__detail__content">
            <div class="location__detail__label">Dirección</div>
            <p class="location__detail__value">
               <strong>${data.address.street}</strong><br>
               ${data.address.zone}, ${data.address.city}<br>
               ${data.address.country}
            </p>
         </div>
      `;
  }

  // ============================================
  // TELÉFONO (phone-1)
  // ============================================
  const phone1 = document.getElementById("phone-1");
  if (phone1) {
    phone1.innerHTML = `
         <div class="location__detail__icon">
            <i class="ri-phone-line"></i>
         </div>
         <div class="location__detail__content">
            <div class="location__detail__label">Teléfono</div>
            <p class="location__detail__value">
               <strong>${data.phone}</strong><br>
               Atención al cliente
            </p>
         </div>
      `;
  }

  // ============================================
  // EMAIL (email-1)
  // ============================================
  const email1 = document.getElementById("email-1");
  if (email1) {
    email1.innerHTML = `
         <div class="location__detail__icon">
            <i class="ri-mail-line"></i>
         </div>
         <div class="location__detail__content">
            <div class="location__detail__label">Correo electrónico</div>
            <p class="location__detail__value">
               <strong>${data.email}</strong>
            </p>
         </div>
      `;
  }

  // ============================================
  // BOTONES DE ACCIÓN (actions-1)
  // ============================================
  const actions1 = document.getElementById("actions-1");
  if (actions1) {
    actions1.innerHTML = `
         <a href="${data.links.googleMaps}"
            target="_blank" class="location__btn primary">
            <i class="ri-navigation-line"></i>
            <span>Cómo llegar</span>
         </a>
         <a href="${data.links.whatsappLong}"
            target="_blank" class="location__btn">
            <i class="ri-whatsapp-line"></i>
            <span>Escribir por WhatsApp</span>
         </a>
      `;
  }

  // ============================================
  // MAPA IFRAME (map-1)
  // ============================================
  const map1 = document.getElementById("map-1");
  if (map1) {
    // Preservar el badge de estado
    const statusHtml = `
         <div class="location__status open" id="storeStatus">
            <span class="location__status__dot"></span>
            <span id="statusText">Abierto ahora</span>
         </div>
      `;

    map1.innerHTML = `
         ${statusHtml}
         <iframe
            src="${data.mapEmbed}"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
         </iframe>
      `;
  }

  // ============================================
  // SECCIÓN CONTACTO - Escríbenos (contact-2)
  // ============================================
  const contact2 = document.getElementById("contact-2");
  if (contact2) {
    contact2.innerHTML = `
         <h3 class="contact__title">Escríbenos</h3>
         <div class="contact__social">
            <a href="${data.links.whatsapp}" target="_blank">
               <i class="ri-whatsapp-fill"></i>
            </a>
            <a href="${data.links.telegram}" target="_blank">
               <i class="ri-telegram-fill"></i>
            </a>
            <a href="mailto:${data.email}" target="_blank">
               <i class="ri-mail-fill"></i>
            </a>
            <a href="${data.links.messenger}" target="_blank">
               <i class="ri-messenger-fill"></i>
            </a>
         </div>
      `;
  }

  // ============================================
  // SECCIÓN CONTACTO - Llámanos (phone-2)
  // ============================================
  const phone2 = document.getElementById("phone-2");
  if (phone2) {
    phone2.innerHTML = `
         <h3 class="contact__title">Llámanos</h3>
         <address class="contact__info">
            ${data.phone}
         </address>
      `;
  }

  // ============================================
  // SECCIÓN CONTACTO - Encuéntranos (location-3)
  // ============================================
  const location3 = document.getElementById("location-3");
  if (location3) {
    location3.innerHTML = `
         <h3 class="contact__title">Encuéntranos aquí</h3>
         <address class="contact__info">
            ${data.address.street} <br>
            ${data.address.zone}, ${data.address.city}<br>
            ${data.address.country}
         </address>
      `;
  }

  // Actualizar el nombre de la ciudad en el modal de contacto
  const contactCityName = document.getElementById("contactCityName");
  if (contactCityName) {
    contactCityName.textContent = city;
  }

  console.log(`✅ Contenido actualizado para: ${city}`);
}

// ============================================
// EXPORTAR FUNCIONES Y DATOS
// ============================================

// Si usas módulos ES6, descomenta esto:
// export { CITY_DATA, updatePageContent };

// Si no usas módulos, las funciones ya están disponibles globalmente
