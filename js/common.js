var dialogOverlay = document.querySelector(".dialog-overlay");

/**
 * Закрытие диалоговых (модальных) окон нажатием на крестик
 */
function addCloseListener(dialog) {
  var dialogCloseBtn = dialog.querySelector(".dialog-close");
  dialogCloseBtn.addEventListener("click", function(event) {
    event.preventDefault();
    dialog.classList.remove("display-block");
    dialogOverlay.classList.remove("display-block");
  });
}

var dialogArray = document.querySelectorAll(".dialog");
for (var i = 0; i < dialogArray.length; ++i) {
  addCloseListener(dialogArray[i]);
}
