// =============== CONTACT MODAL ===============
function initContactModal() {
   const contactModal = document.getElementById('contactModal');
   const contactCityName = document.getElementById('contactCityName');

   // Obtener la ciudad del localStorage
   const userLocation = localStorage.getItem('user_location_bolivia');

   if (userLocation && contactCityName) {
      contactCityName.textContent = userLocation;
   }
}

// Función para abrir el modal de contactos
function openContactModal() {
   const contactModal = document.getElementById('contactModal');
   if (contactModal) {
      document.body.classList.add('modal__lock__scroll');
      contactModal.classList.add('modal__open');
      initContactModal();
   }
}

// Función para cerrar el modal de contactos
function closeContactModal() {
   const contactModal = document.getElementById('contactModal');
   if (contactModal) {
      contactModal.classList.remove('modal__open');
      document.body.classList.remove('modal__lock__scroll');
   }
}

// Cerrar modal al hacer clic en el fondo
document.getElementById('contactModal')?.querySelector('.modal__overlay__bg')?.addEventListener('click', closeContactModal);

// Para abrir el modal desde cualquier botón en tu página:
document.getElementById('openContactModal').addEventListener('click', openContactModal);