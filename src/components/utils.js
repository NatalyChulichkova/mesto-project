import { pushEsc, pushOverlay } from './modal.js';

function openPopup(popup) {
	popup.classList.add('popup_opened');
  document.addEventListener('keydown', pushEsc);
  popup.addEventListener('click', pushOverlay);
};

function closePopup(popup) {
  document.removeEventListener('keydown', pushEsc);
  popup.removeEventListener('click', pushOverlay);
	popup.classList.remove('popup_opened');
};

export { openPopup, closePopup };