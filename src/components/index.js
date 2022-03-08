import '../pages/index.css';
import { enableValidation } from './validate.js';
import { popupPlace, addElement, addInitialCards } from './card.js';
import { popupProfile, handleProfileFormSubmit, openProfile } from './modal.js';
import { openPopup } from './utils.js';
 
const editButton = document.querySelector('.profile__edit-button'); 
const addButton = document.querySelector('.profile__add-button'); 
const addSave = document.querySelector('#button-save'); 
const configGroup = { formSelector: '.popup__info',
inputSelector: '.popup__item',
errorClass: 'popup__error-message_visible',
inputInvalidClass: 'popup__item_type_error',
buttonSelector: '.popup__save-button',
buttonDisabledClass: 'popup__save-button_disabled'};

editButton.addEventListener('click', openProfile);
popupPlace.addEventListener('submit', addElement);
addButton.addEventListener('click', () => {openPopup(popupPlace);});
popupProfile.addEventListener('submit', handleProfileFormSubmit); 


enableValidation(configGroup);

addInitialCards();

export { addSave, configGroup };