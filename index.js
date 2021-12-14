// Фотокарточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('#editprofile');
const popupPlace = document.querySelector('#new-post');
const popupPhoto = document.querySelector('#photo');
const saveButton = popupProfile.querySelector('.popup__save-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const closeButtonPlace = popupPlace.querySelector('.popup__close-button');
const closeButtonPhoto = popupPhoto.querySelector('.popup__close-button');
const placeInput = popupPlace.querySelector('#place');
const linkInput = popupPlace.querySelector('#url');
const createButton = popupPlace.querySelector('.popup__button');
const photoLink = popupPhoto.querySelector('.popup__image-big');
const photoTitle = popupPhoto.querySelector('.popup__title-big');
const formElement = popupProfile.querySelector('.popup__info');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#status');
const elementContainer = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;

// Работа модальных окон
function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

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
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupProfile);
}
popupProfile.addEventListener('submit', formSubmitHandler); 

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
	let newCard;
	initialCards.forEach((card) => {
		newCard = createElement(card.link, card.name);
		elementContainer.append(newCard);
	})
}
addInitialCards();
