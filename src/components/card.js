import { openPopup } from './utils.js';
import { popupPhoto } from './index.js'

const elementContainer = document.querySelector('.elements'); 
const elementTemplate = document.querySelector('#element-template').content; 

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

export { addElement, addInitialCards } 