import { openPopup, closePopup } from './utils.js';

const elementContainer = document.querySelector('.elements'); 
const elementTemplate = document.querySelector('#element-template').content; 
const photoLink = document.querySelector('.popup__image-big'); 
const photoTitle = document.querySelector('.popup__title-big'); 
const placeInput = document.querySelector('#place'); 
const linkInput = document.querySelector('#url'); 
const popupPhoto = document.querySelector('#photo'); 
const popupPlace = document.querySelector('#new-post'); 

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

// Действия с карточками
function switchLikes(like) {
	like.classList.toggle('element__like_active');
};

function deleteCard(item) {
	const deleteElement = item.closest('.element');
	deleteElement.remove();
};

function increasePhoto(item) {
	openPopup(popupPhoto);
	photoLink.src = item.src;
	photoLink.alt = item.alt;
	photoTitle.textContent = item.alt;
};

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
};

function addInitialCards() {
	initialCards.forEach((card) => {
		const newCard = createElement(card.link, card.name);
		elementContainer.append(newCard);
	})
};

function addElement(evt) {
	evt.preventDefault();
	const newCard = createElement(linkInput.value, placeInput.value);
	elementContainer.prepend(newCard);
	linkInput.value = '';
	placeInput.value = '';
	closePopup(popupPlace);
}

export { popupPhoto, popupPlace, addElement, addInitialCards } 