import { pushEsc, handlePopupClose } from './modal.js';

function openPopup(popup) {
	popup.classList.add('popup_opened');
  document.addEventListener('keydown', pushEsc);
  popup.addEventListener('click', handlePopupClose);
};

function closePopup(popup) {
  document.removeEventListener('keydown', pushEsc);
  popup.removeEventListener('click', handlePopupClose);
	popup.classList.remove('popup_opened');
};

export { openPopup, closePopup };