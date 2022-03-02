// // groupValidation({
// //   formSelector: '.popup__form',
// //   inputSelector: '.popup__item',
// //   submitButtonSelector: '.popup__save-button',
// //   inactiveButtonClass: '.popup__save-button_disabled',
// //   inputErrorClass: '.popup__item_type_error',
// //   errorClass: '.popup__error-message_visible'
// // }); 

// const showInputError = (formElement, inputElement, inputErrorClass, errorClass, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.classList.add(errorClass);
//   errorElement.textContent = errorMessage;
// };

// const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(inputErrorClass);
//   errorElement.classList.add(errorClass);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
//   } else {
//     hideInputError(formElement, inputElement, inputErrorClass, errorClass);
//   }
// };

// function setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
//   const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
//   const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);

//   toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//     });
//   });
// };

// const enableValidation = () => {
//   const validationData = {
//     formSelector,
//     inputSelector,
//     submitButtonSelector,
//     inactiveButtonClass,
//     inputErrorClass,
//     errorClass
//   };
//   const formList = Array.from(document.querySelectorAll(formSelector));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListeners(validationData);
//   });
// };

// enableValidation();

// function hasInvalidInput (inputList) {
//    return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// }

// function toggleButtonState (inputList, buttonElement, inactiveButtonClass) {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(inactiveButtonClass);
//     buttonElement.setAttribute('disabled', '');
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// };

// export { enableValidation };