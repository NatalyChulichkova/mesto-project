// import { openPopup, closePopup } from './utils.js';
// import { elementTemplate, elementContainer, initialCards, switchLikes, deleteCard, increasePhoto, createElement, addInitialCards } from './card.js';
// import { editButton, popupPlace, addButton, popupProfile, closeButtonProfile, closeButtonPlace, popupPhoto, closeButtonPhoto } from './index.js'
// import { groupValidation, showInputError, hideInputError, checkInputValidity, setEventListeners, enableValidation, hasInvalidInput, toggleButtonState} from './validate.js';

// const profileName = document.querySelector('.profile__name'); 
// const profileStatus = document.querySelector('.profile__status'); 
// const placeInput = document.querySelector('#place'); 
// const linkInput = document.querySelector('#url');
// const nameInput = document.querySelector('#name'); 
// const jobInput = document.querySelector('#status'); 

// function handleSubmitForm (evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileStatus.textContent = jobInput.value;
//   closePopup(popupProfile);
// }

// function addElement(evt) {
// 	evt.preventDefault();
// 	const newCard = createElement(linkInput.value, placeInput.value);
// 	elementContainer.prepend(newCard);
// 	linkInput.value = '';
// 	placeInput.value = '';
// 	closePopup(popupPlace);
// }

// function openProfile() {	
// 	openPopup(popupProfile);
// 	nameInput.value = profileName.textContent;
// 	jobInput.value = profileStatus.textContent;
// }

// export { handleSubmitForm, addElement, openProfile };