import { pushEsc, handlePopupClose } from './modal.js';

function openPopup(popup) {
  document.addEventListener('keydown', pushEsc);
  popup.addEventListener('click', handlePopupClose);
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  document.removeEventListener('keydown', pushEsc);
  popup.removeEventListener('click', handlePopupClose);
  popup.classList.remove('popup_opened');
};

export { openPopup, closePopup };