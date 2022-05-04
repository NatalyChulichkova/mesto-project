import { openPopup, closePopup } from './utils.js';
import { disableButton } from './validate.js';
import { createButton, configGroup, userId } from './index.js';
import { addLike, deleteLike, deletePhoto, createNewCard } from './api.js';
import { renderLoading } from './modal.js';

const elementContainer = document.querySelector('.elements'); 
const elementTemplate = document.querySelector('#element-template').content; 
const photoLink = document.querySelector('.popup__image-big'); 
const photoTitle = document.querySelector('.popup__title-big');  
const popupPhoto = document.querySelector('#photo'); 
const popupPlace = document.querySelector('#new-post'); 
const addElementForm = document.querySelector('#add_element');

// Создание карточки
function createElement(name, link, cardId, likeCounter, isLiked, ownerId, userId ) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = newElement.querySelector('.element__image');
  const elementDeleteButton = newElement.querySelector('.element__delete');
  const elementLikeButton = newElement.querySelector('.element__like');
  const elementLikeCounter = newElement.querySelector('.element__like-counter');

  newElement.querySelector('.element__title').textContent = name;
  elementImage.src = link;
  elementImage.alt = name;
  elementLikeCounter.textContent = likeCounter;

  function switchLikes (elementLikeButton, elementLikeCounter, cardId) {
    if (elementLikeButton.classList.contains('element__like_active')) {
          deleteLike(cardId)
          .then(res => {
            elementLikeCounter.textContent = res.likes.length;
            elementLikeButton.classList.remove('element__like_active');
          })
          .catch(err => console.error(err))
        } else {
          addLike(cardId)
          .then(res => {
            elementLikeCounter.textContent = res.likes.length;
            elementLikeButton.classList.add('element__like_active');
          })
          .catch(err => console.error(err))
        }
  };

  function deleteCard() {
    deletePhoto(cardId)
    .then(() => {newElement.remove();})
    .catch(err => console.error(err))
  };

  function increasePhoto(item) {
    openPopup(popupPhoto);
    photoLink.src = item.src;
    photoLink.alt = item.alt;
    photoTitle.textContent = item.alt;
  };

  if (ownerId == userId) {
    elementDeleteButton.classList.add('element__delete_visible');
  }

  if (isLiked) elementLikeButton.classList.add('element__like_active');
  
  elementLikeButton.addEventListener('click', () => {switchLikes(elementLikeButton, elementLikeCounter, cardId);});
  elementDeleteButton.addEventListener('click', () => {deleteCard()});
  elementImage.addEventListener('click', () => {increasePhoto(elementImage)});
 
  return newElement;
}

function addCard(container, newElement) {
  container.prepend(newElement);
}

// Добавление карточки
function addElement(evt) {
  evt.preventDefault();
  renderLoading(true, addElementForm);
  const cardName = addElementForm.place.value;
  const cardPic = addElementForm.url.value;
  
  createNewCard(cardName, cardPic)
    .then(card => {
      addCard(elementContainer, createElement(cardName, cardPic, card._id, 0, false));
      addElementForm.reset();
      disableButton(createButton, configGroup)
      closePopup(popupPlace);
    })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(false, addElementForm);
    });
}

export { popupPhoto, popupPlace, addElement, elementContainer, createElement, addCard } 