// 1 Работа модальных окон
// Открытие и закрытие модального окна
// const popup = document.querySelector('.popup');
// const popupEdit = document.querySelector('.popup_edit-profile');
// const popupNew = document.querySelector('.popup_new-post');
// const editButton = document.querySelector('.profile__edit-button');
// const closeButton = document.querySelector('.popup__close-button');
// const addButton = document.querySelector('.profile__add-button');

// editButton.addEventListener('click',() => {
//   popupEdit.classList.add('popup_opened');
// });

// closeButton.addEventListener('click',() => {
//   popup.classList.remove('popup_opened');
// });

// // closeButton.addEventListener('click',() => {
// //   popupNew.classList.remove('popup_opened');
// // });

// addButton.addEventListener('click',() => {
//   popupNew.classList.add('popup_opened');
// });

// // Редактирование имени и информации о себе
// const formElement = document.querySelector('.popup__info');
// const nameInput = document.querySelector('[name="nickname"]');
// const jobInput = document.querySelector('[name="text"]');
// const profileName = document.querySelector('.profile__name');
// const profileStatus = document.querySelector('.profile__status');

// function formSubmitHandler(evt) {
//     evt.preventDefault(); 
//     profileName.textContent = nameInput.value;
//     profileStatus.textContent = jobInput.value;
//     closePopup(popup);
// }
// formElement.addEventListener('submit', formSubmitHandler); 

// 2 Карточки
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

// 3 Форма добавления карточки

// 4 Добавление карточки

// 5 Лайк карточки

// 6 Удаление карточки

// 7 Открытие попапа с картинкой

// 8 Плавное открытие и закрытие попапов


const profile = document.querySelector(".profile")
const profileName = profile.querySelector(".profile__name");
const profileDescription = profile.querySelector(".profile__status");
const editButton = profile.querySelector(".profile__edit-button");
const addButton = profile.querySelector(".profile__add-button");

const popupProfile = document.querySelector("#editprofile");
const closeButtonProfile = popupProfile.querySelector(".popup__close-button");
const saveButton = popupProfile.querySelector(".popup__save-button");
const formElement = popupProfile.querySelector(".popup__info");
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#description");

const popupPlace = document.querySelector("#addplace");
const placeInput = popupPlace.querySelector("#place");
const linkInput = popupPlace.querySelector("#link");
const closeButtonPlace = popupPlace.querySelector(".button_close");
const createButton = popupPlace.querySelector(".popup__button");

const cardsContainer = document.querySelector(".elements");

const cardTemplate = document.querySelector("#element-template").content;

const popupPhoto = document.querySelector("#popup-photo");
const closeButtonPhoto = popupPhoto.querySelector(".button_close");
const photoLink = popupPhoto.querySelector(".popup__image-popup");
const photoCaption = popupPhoto.querySelector(".popup__caption");

function openPopup(popup) {
	popup.classList.add("popup_opened");
}

function closePopup(popup) {
	popup.classList.remove("popup_opened");
}

function openWindowProfile() {	
	openPopup(popupProfile);
	nameInput.value = profileName.textContent;
	jobInput.value = profileDescription.textContent;
}

function editProfile(evt) {
	evt.preventDefault();
	
	profileName.textContent = nameInput.value;
	profileDescription.textContent = jobInput.value;
	closePopup(popupProfile);
}

// 4 Добавление карточки
function createCard (link, name) {
	const newCard = cardTemplate.querySelector(".element").cloneNode(true);

	const newCardPhoto = newCard.querySelector(".element__photo");
	newCardPhoto.alt = name;
	newCardPhoto.src = link;
	newCardPhoto.addEventListener('click', function(){ resizePhoto(newCardPhoto); });
	newCard.querySelector(".element__title").textContent = name;

	const newCardLike = newCard.querySelector(".element__like");
	newCardLike.addEventListener('click', function(){ toggleLikes(newCardLike); });

	const newCardDelete = newCard.querySelector(".element__delete");
	newCardDelete.addEventListener('click', function(){ deleteCard(newCardDelete); });
	return newCard;
}
function addInitialCards() {
	let newCard;

	initialCards.forEach(function(card) {
		newCard = createCard(card.link, card.name);
		cardsContainer.append(newCard);
	})
}

function toggleLikes(like) {
	like.classList.toggle("element__like_active");
}

function addCard(evt) {
	evt.preventDefault();

	const newCard = createCard(linkInput.value, placeInput.value);
	cardsContainer.prepend(newCard);
	linkInput.value = '';
	placeInput.value = '';
	closePopup(popupPlace);
}

function deleteCard(item) {
	const deleteElement = item.closest(".element");
	deleteElement.remove();
}

function resizePhoto(item) {
	openPopup(popupPhoto);
	photoLink.src = item.src;
	photoLink.alt = item.alt;
	photoCaption.textContent = item.alt;
}

// Слушатели

editButton.addEventListener('click', openWindowProfile);
addButton.addEventListener('click', function(){ openPopup(popupPlace); });
closeButtonProfile.addEventListener('click', function(){ closePopup(popupProfile); });
// closeButtonPlace.addEventListener('click', function(){ closePopup(popupPlace); });
closeButtonPhoto.addEventListener('click', function(){ closePopup(popupPhoto); });

popupProfile.addEventListener('submit', editProfile);
popupPlace.addEventListener('submit', addCard);

addInitialCards();