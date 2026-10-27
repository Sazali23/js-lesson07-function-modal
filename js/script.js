var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

// BONUS: function to open the modal
var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};

// Function to close the modal
var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

button.addEventListener("click", function () {
  openModal();
});

modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
  }
});
