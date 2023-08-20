
var detailButtons = document.querySelectorAll(".detail-button");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup-close");

detailButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var imgAlt = this.parentNode.querySelector("img").getAttribute("alt");
    popup.classList.add("active");
  });
});

popupClose.addEventListener("click", function() {
  popup.classList.remove("active");
});