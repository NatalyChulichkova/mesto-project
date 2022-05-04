import { openPopup, closePopup } from './utils.js';
import { configGroup, profileAvatar, createButton } from './index.js';
import { disableButton } from './validate.js';
import { changeAvatar, changeProfile } from './api.js';

const buttonEsc = 27;
const profileName = document.querySelector('.profile__name'); 
const profileStatus = document.querySelector('.profile__status');
const popupProfile = document.querySelector('#edit_profile'); 
const nameInput = document.querySelector('#name'); 
const statusInput = document.querySelector('#status'); 
const avatarInput = document.querySelector('[name="url-avatar"]');
const buttonSaveAvatar = document.querySelector('#avatar_button');
const popupEditAvatar = document.querySelector('#edit_avatar');
const popupAvatar = document.querySelector('.popup_edit-avatar');
const profileForm = document.querySelector('#form_profile');

// Ожидание загрузки

function renderLoading(isLoading, button) {
  const submitButton = button.querySelector(configGroup.buttonSelector);
  if (isLoading) {
    submitButton.textContent = 'Сохранение...';  
  } else if (button == createButton){
    submitButton.textContent = 'Создать';
  } else {
    submitButton.textContent = 'Сохранить';
  }
}

// Работа модальных окон
function pushEsc(evt) {
  if (evt.keyCode == buttonEsc) {
    evt.preventDefault();
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

function handlePopupClose(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  };
};

// Редактирование имени
function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  const nameId = nameInput.value;
  const statusId = statusInput.value;

  renderLoading(true, profileForm);
  changeProfile(nameId, statusId)
    .then(res => {
      profileName.textContent = res.name;
      profileStatus.textContent = res.about;
      closePopup(popupProfile);
    })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(false, profileForm);
    });
};

function openProfile() {	
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
};

// Редактирование аватара
function editAvatar(evt) {
  evt.preventDefault();

  const avatarUrl = avatarInput.value;

  renderLoading(true, popupEditAvatar);
  changeAvatar(avatarUrl)
    .then(res => {
      profileAvatar.src = res.avatar;
      avatarInput.value = '';
      closePopup(popupAvatar);
      disableButton(buttonSaveAvatar, configGroup);
    })
    .catch(err => console.error(err))
    .finally(() => {
      renderLoading(false,popupEditAvatar);
    });
};

export  { profileStatus, profileName, popupProfile, pushEsc, handlePopupClose, handleProfileFormSubmit, openProfile, editAvatar, popupAvatar, renderLoading };

