/**
 * Функции для работы с кол-вом товаров в корзине или с кол-вом закладок
 */
function setCount(element, count) {
  element.textContent = count;
  if (count > 0) {
    if (!element.parentElement.classList.contains("full")) {
      element.parentElement.classList.add("full");
    }
  }
}

function incrementCount(element, storageKey) {
  var count = localStorage.getItem(storageKey);
  count++;
  localStorage.setItem(storageKey, count);
  setCount(element, count);
}

function initCount(element, storageKey) {
  var count = localStorage.getItem(storageKey);
  if (count == null) {
    count = 0;
    localStorage.setItem(storageKey, count);
  }
  setCount(element, count);
}

/**
 * Закладки
 */
var bookmarkCount = document.querySelector(".header-bookmarks .count");
initCount(bookmarkCount, "bookmarkCount");

function addItemBookmarkListener(itemBookmarkBtn) {
  itemBookmarkBtn.addEventListener("click", function(event) {
    event.preventDefault();
    incrementCount(bookmarkCount, "bookmarkCount");
  });
}

var itemBookmarkBtnArray = document.querySelectorAll(".catalog-item-bookmark");
for (var i = 0; i < itemBookmarkBtnArray.length; ++i) {
  addItemBookmarkListener(itemBookmarkBtnArray[i]);
}


/**
 * Товары в корзине
 */
var itemDialog = document.querySelector(".dialog.catalog-cart");

var itemCount = document.querySelector(".header-cart .count");
initCount(itemCount, "itemCount");

function addItemBuyListener(itemBuyBtn) {
  itemBuyBtn.addEventListener("click", function(event) {
    event.preventDefault();
    incrementCount(itemCount, "itemCount");
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
