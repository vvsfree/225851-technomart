/**
 * Товары в корзине
 */
var itemDialog = document.querySelector(".dialog.catalog-cart");

function addItemBuyListener(itemBuyBtn) {
  itemBuyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    dialogOverlay.classList.add("display-block");
    itemDialog.classList.add("display-block");
  });
}

var itemBuyBtnArray = document.querySelectorAll(".catalog-item-buy");
for (var j = 0; j < itemBuyBtnArray.length; ++j) {
  addItemBuyListener(itemBuyBtnArray[j]);
}

var itemDialogContinueBtn = document.querySelector(".dialog.catalog-cart .catalog-cart-continue");
itemDialogContinueBtn.addEventListener("click", function(event) {
  event.preventDefault();
  dialogOverlay.classList.remove("display-block");
  itemDialog.classList.remove("display-block");
});
