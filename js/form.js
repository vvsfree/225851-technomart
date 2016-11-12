/**
 * Форма обратной связи
 */
var customerName = document.querySelector("#customer-name");
var customerEmail = document.querySelector("#customer-email");
var customerMessage = document.querySelector("#customer-message");

var companyDialog = document.querySelector(".dialog.company-form");
var companyWriteUsBtn = document.querySelector(".company-write-us");
companyWriteUsBtn.addEventListener("click", function(event) {
  event.preventDefault();

  var name = localStorage.getItem("customerName");
  if (name) {
    customerName.value = name;
  }

  var email = localStorage.getItem("customerEmail");
  if (email) {
    customerEmail.value = email;
  }

  dialogOverlay.classList.add("display-block");
  companyDialog.classList.add("display-block");

  // Анимация
  //companyDialog.classList.add("dialog-animation");

});

var companyDialogForm = companyDialog.querySelector("form");
companyDialogForm.addEventListener("submit", function(event) {
  if (customerName.value && customerEmail.value && customerMessage.value) {
    localStorage.setItem("customerName", customerName.value);
    localStorage.setItem("customerEmail", customerEmail.value);
  } else {
    // Не все поля заполнены.
    // Все браузеры из ТЗ выделяют незаполненные обязательные (required) поля.
    event.preventDefault();
  }
});
