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

// const profile = document.querySelector('.profile')
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__status');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('#editprofile');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const saveButton = popupProfile.querySelector('.popup__save-button');

// Редактирование имени
const formElement = popupProfile.querySelector('.popup__info');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#status');

const popupPlace = document.querySelector('#new-post');
const placeInput = popupPlace.querySelector('#place');
const linkInput = popupPlace.querySelector('#url');
const closeButtonPlace = popupPlace.querySelector('.popup__close-button');
const createButton = popupPlace.querySelector('.popup__button');

const elementContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template').content;

const popupPhoto = document.querySelector('#photo');
const closeButtonPhoto = popupPhoto.querySelector('.popup__close-button');
const photoLink = popupPhoto.querySelector('.popup__image-popup');
const photoCaption = popupPhoto.querySelector('.popup__caption');

// Открытие и закрытие попапа
function openPopup(popup) {
	popup.classList.add('popup_opened');
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
}

function openWindowProfile() {	
	openPopup(popupProfile);
	nameInput.value = profileName.textContent;
	jobInput.value = profileDescription.textContent;
}

// Редактирование имени
function editProfile(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileDescription.textContent = jobInput.value;
	closePopup(popupProfile);
}
//function formSubmitHandler (evt) {
//  evt.preventDefault();
//formElement.addEventListener('submit', formSubmitHandler); 

// Добавление карточки
function createCard (link, name) {
	const newCard = cardTemplate.querySelector('.element').cloneNode(true);

	const newCardPhoto = newCard.querySelector('.element__image');
	newCardPhoto.alt = name;
	newCardPhoto.src = link;
	newCardPhoto.addEventListener('click', () => {resizePhoto(newCardPhoto);});
	newCard.querySelector('.element__title').textContent = name;

	const newCardLike = newCard.querySelector('.element__like');
	newCardLike.addEventListener('click', () => {toggleLikes(newCardLike);});

	const newCardDelete = newCard.querySelector('.element__delete');
	newCardDelete.addEventListener('click', () => {deleteCard(newCardDelete);});
	return newCard;
}
function addInitialCards() {
	let newCard;

	initialCards.forEach(function(card) {
		newCard = createCard(card.link, card.name);
		elementContainer.append(newCard);
	})
}

function toggleLikes(like) {
	like.classList.toggle('element__like_active');
}

function addCard(evt) {
	evt.preventDefault();
	const newCard = createCard(linkInput.value, placeInput.value);
	elementContainer.prepend(newCard);
	linkInput.value = '';
	placeInput.value = '';
	closePopup(popupPlace);
}

function deleteCard(item) {
	const deleteElement = item.closest('.element');
	deleteElement.remove();
}

function resizePhoto(item) {
	openPopup(popupPhoto);
	photoLink.src = item.src;
	photoLink.alt = item.alt;
	photoCaption.textContent = item.alt;
}

// Действия кнопок

editButton.addEventListener('click', openWindowProfile);
addButton.addEventListener('click', () => { openPopup(popupPlace); });
closeButtonProfile.addEventListener('click', () => { closePopup(popupProfile); });
closeButtonPlace.addEventListener('click', () => { closePopup(popupPlace); });
closeButtonPhoto.addEventListener('click', () => { closePopup(popupPhoto); });

popupProfile.addEventListener('submit', editProfile);
popupPlace.addEventListener('submit', addCard);

addInitialCards();