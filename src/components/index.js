import '../pages/index.css';
import { enableValidation } from './validate.js';
import { popupPhoto, popupPlace, addElement, addInitialCards } from './card.js';
import { popupProfile, handleSubmitForm, openProfile } from './modal.js';
import { openPopup, closePopup } from './utils.js';
 
const editButton = document.querySelector('.profile__edit-button'); 
const addButton = document.querySelector('.profile__add-button');  
const closeButtonPlace = popupPlace.querySelector('.popup__close-button'); 
const closeButtonPhoto = popupPhoto.querySelector('.popup__close-button'); 
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');

editButton.addEventListener('click', openProfile);
popupPlace.addEventListener('submit', addElement);
addButton.addEventListener('click', () => {openPopup(popupPlace);});
closeButtonPhoto.addEventListener('click', () => {closePopup(popupPhoto);});
closeButtonProfile.addEventListener('click', () => {closePopup(popupProfile);});
closeButtonPlace.addEventListener('click', () => {closePopup(popupPlace);});
popupProfile.addEventListener('submit', handleSubmitForm); 

enableValidation({
  formSelector: '.popup__info',
  inputSelector: '.popup__item',
  errorClass: 'popup__error-message_visible',
  inputInvalidClass: 'popup__item_type_error',
  buttonSelector: '.popup__save-button',
  buttonDisabledClass: 'popup__save-button_disabled'
});

addInitialCards();