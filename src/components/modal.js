import { openPopup, closePopup } from './utils.js';

const buttonEsc = 27;
const profileName = document.querySelector('.profile__name'); 
const profileStatus = document.querySelector('.profile__status');
const popupProfile = document.querySelector('#editprofile'); 
const nameInput = document.querySelector('#name'); 
const jobInput = document.querySelector('#status'); 

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

export  { popupProfile, pushEsc, pushOverlay, handleSubmitForm, openProfile };