import '../pages/index.css';
import { enableValidation } from './validate.js';
import { popupPlace, addElement, createElement, addCard, elementContainer } from './card.js';
import { profileStatus, profileName, popupProfile, handleProfileFormSubmit, openProfile, editAvatar, popupAvatar } from './modal.js';
import { openPopup } from './utils.js';
import { getProfile, getCards } from './api.js';

const editButton = document.querySelector('.profile__edit-button'); 
const addButton = document.querySelector('.profile__add-button'); 
const createButton = document.querySelector('#button_create'); 
const profileAvatar = document.querySelector('.profile__avatar');
const formAvatar = document.querySelector('#edit_avatar');
const formAvatarButton = document.querySelector('.profile__edit-avatar');
const configGroup = { formSelector: '.popup__info',
inputSelector: '.popup__item',
errorClass: 'popup__error-message_visible',
inputInvalidClass: 'popup__item_type_error',
buttonSelector: '.popup__save-button',
buttonDisabledClass: 'popup__save-button_disabled'};

let userId = 0;

Promise.all([getProfile(), getCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    profileName.textContent = userData.name;
    profileStatus.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    profileAvatar.alt = `Аватар ${userData.name}`;
    cards.forEach(card => {
      const initialCards = createElement(card.name, card.link, card._id, card.likes.length, card.likes.some(item => item._id === userId));
      const elementDeleteButton = initialCards.querySelector('.element__delete');
      if (card.owner._id !== userId) {
        elementDeleteButton.remove();
      };
      addCard(elementContainer, initialCards);
    })
  })
  .catch(err => console.error(err))
 

editButton.addEventListener('click', openProfile);
popupPlace.addEventListener('submit', addElement);
addButton.addEventListener('click', () => {openPopup(popupPlace);});
popupProfile.addEventListener('submit', handleProfileFormSubmit); 
formAvatarButton.addEventListener('click', () =>{openPopup(popupAvatar);})
formAvatar.addEventListener('submit', editAvatar);

enableValidation(configGroup);

export { createButton, configGroup, userId, profileAvatar };