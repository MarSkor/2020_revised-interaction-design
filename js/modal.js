//help from https://www.w3schools.com/howto/howto_css_delete_modal.asp

var deleteAccountModal = document.querySelector("#dlt-account");

window.onclick = function (event) {
  if (event.target == deleteAccountModal) {
    deleteAccountModal.style.display = "none";
  }
};
