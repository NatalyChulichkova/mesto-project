import { openPopup, closePopup } from './utils.js';
// import { elementTemplate, elementContainer, initialCards, switchLikes, deleteCard, increasePhoto, createElement, addInitialCards } from './card.js';
// import { editButton, popupPlace, addButton, popupProfile, closeButtonProfile, closeButtonPlace, popupPhoto, closeButtonPhoto } from './index.js'
// import { groupValidation, showInputError, hideInputError, checkInputValidity, setEventListeners, enableValidation, hasInvalidInput, toggleButtonState} from './validate.js';

const buttonEsc = 27;

// Работа модальных окон
function pushEsc(evt) {
  if (evt.keyCode == buttonEsc) {
    evt.preventDefault();
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

function pushOverlay(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__exit-button')) {
    closePopup(evt.currentTarget);
  };
};

// Редактирование имени
function handleSubmitForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupProfile);
};

function openProfile() {	
	openPopup(popupProfile);
	nameInput.value = profileName.textContent;
	jobInput.value = profileStatus.textContent;
};

export  { pushEsc, pushOverlay, handleSubmitForm, openProfile };