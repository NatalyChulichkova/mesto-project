const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: 'a63bedb3-026d-415b-b442-4340da9b4de1',
    'Content-Type': 'application/json'
  }
};

export const responseHandler = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

// Получение информации о пользователе
export const getProfile = () => {
  return fetch(`${config.baseUrl}/users/me`,{
    headers: config.headers,
  })
  .then(res => responseHandler(res));      
};

// Сохранение новых данных пользователя на сервере
export const changeProfile = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers, 
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
  .then(res => responseHandler(res)); 
};

// Обновление фото пользователя
export const changeAvatar = (avatarUrl) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl
    })
  })
  .then(res => responseHandler(res));  
};

// Получение фото с сервера
export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
  .then(res => responseHandler(res));       
};

// Добавление новой фото на сервер
export const createNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
  .then(res => responseHandler(res));  
};

// Удаление фото пользователя с сервера
export const deletePhoto = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => responseHandler(res)); 
};

// Добавить лайк
export const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(res => responseHandler(res));       
};

// Удаление лайка
export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => responseHandler(res)); 
};