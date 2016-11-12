var companyMapBtn = document.querySelector(".company-map img");
var companyMapPopup = document.querySelector(".company-map-popup");

companyMapBtn.addEventListener("click", function(event) {
  event.preventDefault();
  companyMapPopup.classList.add("display-block");
});

var companyMapCloseBtn = companyMapPopup.querySelector(".dialog-close");
companyMapCloseBtn.addEventListener("click", function(event) {
  event.preventDefault();
  companyMapPopup.classList.remove("display-block");
});
