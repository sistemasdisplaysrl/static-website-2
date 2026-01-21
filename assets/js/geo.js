const STORAGE_KEY = 'user_location_bolivia';
const locationModal = document.getElementById('locationModal');
const modalBody = document.getElementById('modalBody');
const locationButtons = document.getElementById('locationButtons');
const loadingState = document.getElementById('loadingState');
const alertContainer = document.getElementById('alertContainer');
const welcomeContent = document.getElementById('welcomeContent');
const selectedLocationDisplay = document.getElementById('selectedLocation');
const detectLocationBtn = document.getElementById('detectLocationBtn');
const cityButtons = document.querySelectorAll('[data-city]');

// Check if location is already stored
function checkStoredLocation() {
   const storedLocation = localStorage.getItem(STORAGE_KEY);
   if (storedLocation) {

      updatePageContent(storedLocation);

      showWelcomePage(storedLocation);
      return true;
   }
   return false;
}

// Show welcome page
function showWelcomePage(city) {
   locationModal.classList.remove('modal__open');
   document.body.classList.remove('modal__lock__scroll');
   document.body.classList.add('modal__location__set');

   // const cityIcons = {
   //    'La Paz': 'fa-mountain',
   //    'Cochabamba': 'fa-city',
   //    'Santa Cruz': 'fa-tree'
   // };

   // selectedLocationDisplay.innerHTML = `
   //          <i class="fa-solid ${cityIcons[city] || 'fa-map-marker-alt'}"></i>
   //          <span>${city}, Bolivia</span>
   //       `;
}

// Show alert message
function showAlert(message, type = 'warning') {
   const alertClass = type === 'error' ? 'modal__alert__error' : 'modal__alert__warning';
   const icon = type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info';

   alertContainer.innerHTML = `
            <div class="modal__alert ${alertClass}">
               <i class="fa-solid ${icon}"></i>
               <span>${message}</span>
            </div>
         `;
}

// Clear alert
function clearAlert() {
   alertContainer.innerHTML = '';
}

// Save location and proceed
function saveLocation(city) {
   localStorage.setItem(STORAGE_KEY, city);

   updatePageContent(city);

   showAlert(`¡Ubicación guardada! Redirigiendo...`, 'warning');

   setTimeout(() => {
      showWelcomePage(city);
   }, 1500);
}

// Detect city from coordinates
function detectCity(lat, lon) {
   // La Paz (rango más amplio para mejor detección)
   if (lat >= -16.7 && lat <= -16.3 && lon >= -68.3 && lon <= -68.0) {
      return 'La Paz';
   }

   // Santa Cruz
   if (lat >= -17.9 && lat <= -17.6 && lon >= -63.3 && lon <= -63.0) {
      return 'Santa Cruz';
   }

   // Cochabamba
   if (lat >= -17.5 && lat <= -17.2 && lon >= -66.4 && lon <= -66.0) {
      return 'Cochabamba';
   }

   return null;
}

// Handle geolocation success
function handleGeolocationSuccess(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const city = detectCity(lat, lon);

   locationButtons.style.display = 'flex';
   loadingState.style.display = 'none';

   if (city) {
      showAlert(`¡Ubicación detectada! Estás en ${city} 🇧🇴`, 'warning');
      setTimeout(() => {
         saveLocation(city);
      }, 1500);
   } else {
      showAlert(
         'Tu ubicación no corresponde a La Paz, Cochabamba o Santa Cruz. Por favor, selecciona una ciudad manualmente.',
         'error'
      );
   }
}

// Handle geolocation error
function handleGeolocationError(error) {
   locationButtons.style.display = 'flex';
   loadingState.style.display = 'none';

   let errorMessage = '';

   switch (error.code) {
      case error.PERMISSION_DENIED:
         errorMessage = 'Permiso de ubicación denegado. Por favor, selecciona una ciudad manualmente.';
         break;
      case error.POSITION_UNAVAILABLE:
         errorMessage = 'Información de ubicación no disponible. Por favor, selecciona una ciudad manualmente.';
         break;
      case error.TIMEOUT:
         errorMessage = 'Tiempo de espera agotado. Por favor, selecciona una ciudad manualmente.';
         break;
      default:
         errorMessage = 'Error al obtener la ubicación. Por favor, selecciona una ciudad manualmente.';
   }

   showAlert(errorMessage, 'error');
}

// Detect location
function detectLocation() {
   if (!navigator.geolocation) {
      showAlert(
         'La geolocalización no es compatible con este navegador. Por favor, selecciona una ciudad manualmente.',
         'error'
      );
      return;
   }

   clearAlert();
   locationButtons.style.display = 'none';
   loadingState.style.display = 'flex';

   navigator.geolocation.getCurrentPosition(
      handleGeolocationSuccess,
      handleGeolocationError,
      {
         enableHighAccuracy: true,
         timeout: 10000,
         maximumAge: 0
      }
   );
}

// Event listeners
detectLocationBtn.addEventListener('click', detectLocation);

cityButtons.forEach(button => {
   button.addEventListener('click', () => {
      const city = button.getAttribute('data-city');
      clearAlert();
      saveLocation(city);
   });
});

// Initialize
if (!checkStoredLocation()) {
   locationModal.classList.add('modal__open');
   document.body.classList.add('modal__lock__scroll');
}

// Prevent closing modal (no ESC, no click outside)
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape') {
      e.preventDefault();
   }
});