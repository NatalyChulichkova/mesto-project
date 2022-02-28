import '../pages/index.css';
import { openPopup, closePopup } from './utils.js';
import { handleSubmitForm, addElement, openProfile } from './modal.js';
import { elementTemplate, initialCards, switchLikes, deleteCard, increasePhoto, createElement, addInitialCards } from './card.js';
import { groupValidation, showInputError, hideInputError, checkInputValidity, setEventListeners, enableValidation, hasInvalidInput, toggleButtonState} from './validate.js';

const editButton = document.querySelector('.profile__edit-button');
const popupPlace = document.querySelector('#new-post'); 
const addButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('#editprofile');
const closeButtonProfile = document.querySelector('.popup__close-button'); 
const closeButtonPlace = document.querySelector('.popup__close-button');
const popupPhoto = document.querySelector('#photo'); 
const closeButtonPhoto = document.querySelector('.popup__close-button');
 
const saveButton = document.querySelector('.popup__save-button'); 
const formElement = document.querySelector('.popup__info'); 
const createButton = document.querySelector('.popup__button'); 

editButton.addEventListener('click', openProfile);
popupPlace.addEventListener('submit', addElement);
addButton.addEventListener('click', () => {openPopup(popupPlace);});
closeButtonProfile.addEventListener('click', () => {closePopup(popupProfile);});
closeButtonPlace.addEventListener('click', () => {closePopup(popupPlace);});
closeButtonPhoto.addEventListener('click', () => {closePopup(popupPhoto);});
popupProfile.addEventListener('submit', handleSubmitForm); 

export { editButton, popupPlace, addButton, popupProfile, closeButtonProfile, closeButtonPlace, popupPhoto, closeButtonPhoto }