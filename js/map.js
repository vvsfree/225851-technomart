/**
 * Интерактивная карта
 */
function map() {
  var companyMapPopup = document.querySelector(".company-map-popup");
  if (!companyMapPopup) {
    // На странице нет всплывающего окна с картой
    return;
  }

  var companyMapBtn = document.querySelector(".company-map img");

  companyMapBtn.addEventListener("click", function(event) {
    event.preventDefault();
    companyMapPopup.classList.add("display-block");
  });

  var companyMapCloseBtn = companyMapPopup.querySelector(".dialog-close");
  companyMapCloseBtn.addEventListener("click", function(event) {
    event.preventDefault();
    companyMapPopup.classList.remove("display-block");
  });
}

map();
