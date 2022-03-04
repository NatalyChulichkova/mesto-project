import '../pages/index.css';
import { enableValidation } from './validate.js';
import { addElement, addInitialCards } from './card.js';
import { handleSubmitForm, openProfile } from './modal.js';

// Фотокарточки
import sahara from '../images/element_sahara.jpg';
import kareliya from '../images/element_kareliya.jpg';
import karachaevsk from '../images/element_karachaevsk.jpg';
import elbrus from '../images/element_elbrus.jpg';
import dombai from '../images/element_dombai.jpg';
import Baikal from '../images/element_Baikal.jpg';

const initialCards = [
  { name: 'Пустыня Сахара', link: sahara },
  { name: 'Карелия', link: kareliya },
  { name: 'Карачаевск', link: karachaevsk },
  { name: 'Эльбрус', link: elbrus },
  { name: 'Домбаи', link: dombai },
  { name: 'Байкал', link: Baikal }
];
const profileName = document.querySelector('.profile__name'); 
const profileStatus = document.querySelector('.profile__status'); 
const editButton = document.querySelector('.profile__edit-button'); 
const addButton = document.querySelector('.profile__add-button'); 
const popupProfile = document.querySelector('#editprofile'); 
const closeButtonProfile = popupProfile.querySelector('.popup__close-button'); 
const saveButton = popupProfile.querySelector('.popup__save-button'); 
const formElement = popupProfile.querySelector('.popup__info'); 
const nameInput = formElement.querySelector('#name'); 
const jobInput = formElement.querySelector('#status'); 
const popupPlace = document.querySelector('#new-post'); 
const placeInput = popupPlace.querySelector('#place'); 
const linkInput = popupPlace.querySelector('#url'); 
const closeButtonPlace = popupPlace.querySelector('.popup__close-button'); 
const createButton = popupPlace.querySelector('.popup__button'); 
const popupPhoto = document.querySelector('#photo'); 
const closeButtonPhoto = popupPhoto.querySelector('.popup__close-button'); 
const photoLink = popupPhoto.querySelector('.popup__image-big'); 
const photoTitle = popupPhoto.querySelector('.popup__title-big'); 

editButton.addEventListener('click', openProfile);
popupPlace.addEventListener('submit', addElement);
addButton.addEventListener('click', () => {openPopup(popupPlace);});
closeButtonProfile.addEventListener('click', () => {closePopup(popupProfile);});
closeButtonPlace.addEventListener('click', () => {closePopup(popupPlace);});
closeButtonPhoto.addEventListener('click', () => {closePopup(popupPhoto);});
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