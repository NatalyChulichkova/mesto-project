import '../pages/index.css';
// import { openPopup, closePopup } from './utils.js';
// import { handleSubmitForm, addElement, openProfile } from './modal.js';
// import { elementTemplate, initialCards, switchLikes, deleteCard, increasePhoto, createElement, addInitialCards } from './card.js';
// import { enableValidation } from './validate.js';

// const editButton = document.querySelector('.profile__edit-button');
// const popupPlace = document.querySelector('#new-post'); 
// const addButton = document.querySelector('.profile__add-button');
// const popupProfile = document.querySelector('#editprofile');
// const closeButtonProfile = document.querySelector('.popup__close-button'); 
// const closeButtonPlace = document.querySelector('.popup__close-button');
// const popupPhoto = document.querySelector('#photo'); 
// const closeButtonPhoto = document.querySelector('.popup__close-button');
 
// const saveButton = document.querySelector('.popup__save-button'); 
// const formElement = document.querySelector('.popup__info'); 
// const createButton = document.querySelector('.popup__button'); 

// editButton.addEventListener('click', openProfile);
// popupPlace.addEventListener('submit', addElement);
// addButton.addEventListener('click', () => {openPopup(popupPlace);});
// closeButtonProfile.addEventListener('click', () => {closePopup(popupProfile);});
// closeButtonPlace.addEventListener('click', () => {closePopup(popupPlace);});
// closeButtonPhoto.addEventListener('click', () => {closePopup(popupPhoto);});
// popupProfile.addEventListener('submit', handleSubmitForm); 

// enableValidation ({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__item',
//   submitButtonSelector: '.popup__save-button',
//   inactiveButtonClass: '.popup__save-button_disabled',
//   inputErrorClass: '.popup__item_type_error',
//   errorClass: '.popup__error-message_visible'
// });

// addInitialCards();

// export { editButton, popupPlace, addButton, popupProfile, closeButtonProfile, closeButtonPlace, popupPhoto, closeButtonPhoto }


// Фотокарточки
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ]; 
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
const elementContainer = document.querySelector('.elements'); 
const elementTemplate = document.querySelector('#element-template').content; 


//правка
const buttonEscKeyCode = 27;

// Работа модальных окон
const handleEscUp = (evt) => {
  if (evt.keyCode == buttonEscKeyCode) {
    evt.preventDefault();
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

const handleClickOverlay = (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__exit-button')) {
    closePopup(evt.currentTarget);
  };
};

function openPopup(popup) {
	popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscUp);
  popup.addEventListener('click', handleClickOverlay);
}

function closePopup(popup) {
  document.removeEventListener('keydown', handleEscUp);
  popup.removeEventListener('click', handleClickOverlay);
	popup.classList.remove('popup_opened');
}
//


function openProfile() {	
	openPopup(popupProfile);
	nameInput.value = profileName.textContent;
	jobInput.value = profileStatus.textContent;
}
editButton.addEventListener('click', openProfile);

function addElement(evt) {
	evt.preventDefault();
	const newCard = createElement(linkInput.value, placeInput.value);
	elementContainer.prepend(newCard);
	linkInput.value = '';
	placeInput.value = '';
	closePopup(popupPlace);
}

popupPlace.addEventListener('submit', addElement);
addButton.addEventListener('click', () => {openPopup(popupPlace);});
closeButtonProfile.addEventListener('click', () => {closePopup(popupProfile);});
closeButtonPlace.addEventListener('click', () => {closePopup(popupPlace);});
closeButtonPhoto.addEventListener('click', () => {closePopup(popupPhoto);});

// Редактирование имени
function handleSubmitForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupProfile);
}
popupProfile.addEventListener('submit', handleSubmitForm); 

// Действия с карточками
function switchLikes(like) {
	like.classList.toggle('element__like_active');
}

function deleteCard(item) {
	const deleteElement = item.closest('.element');
	deleteElement.remove();
}

function increasePhoto(item) {
	openPopup(popupPhoto);
	photoLink.src = item.src;
	photoLink.alt = item.alt;
	photoTitle.textContent = item.alt;
}

function createElement (link, name) {
	const newCard = elementTemplate.querySelector('.element').cloneNode(true);

	const newCardPhoto = newCard.querySelector('.element__image');
	newCardPhoto.alt = name;
	newCardPhoto.src = link;
	newCardPhoto.addEventListener('click', () => {increasePhoto(newCardPhoto);});
	newCard.querySelector('.element__title').textContent = name;

	const newCardLike = newCard.querySelector('.element__like');
	newCardLike.addEventListener('click', () => {switchLikes(newCardLike);});

	const newCardDelete = newCard.querySelector('.element__delete');
	newCardDelete.addEventListener('click', () => {deleteCard(newCardDelete);});
	return newCard;
}

function addInitialCards() {
	initialCards.forEach((card) => {
		const newCard = createElement(card.link, card.name);
		elementContainer.append(newCard);
	})
}
addInitialCards();


//validacia
const validationConfig = {
  formSelector: '.popup__info',
  inputSelector: '.popup__item',
  errorClass: 'popup__error-message_visible',
  inputInvalidClass: 'popup__item_type_error',
  buttonSelector: '.popup__save-button',
  buttonDisabledClass: 'popup__save-button_disabled'
};

const hideInputError = (inputElement, errorElement, config) => {
  inputElement.classList.remove(config.inputInvalidClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
};

const showInputError = (inputElement, errorElement, errorMessage, config) => {
  inputElement.classList.add(config.inputInvalidClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
};

const checkInputValidity = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`);

  if (inputElement.validity.valid) {
    hideInputError(inputElement, errorElement, config);
  } else {
    showInputError(inputElement, errorElement, inputElement.validationMessage, config);
  };
};

const disableButton = (buttonElement, config) => {
  buttonElement.classList.add(config.buttonDisabledClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement, config) => {
  buttonElement.classList.remove(config.buttonDisabledClass);
  buttonElement.disabled = false;
};

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (formElement, inputList, config) => {
  const buttonElement = formElement.querySelector(config.buttonSelector);

  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  };
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(formElement, inputList, config);
    });
  });

  toggleButtonState(formElement, inputList, config);
};

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  
  forms.forEach(formElement => {
    formElement.addEventListener('submit', event => {
      event.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

enableValidation(validationConfig);
//