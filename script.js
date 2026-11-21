const overlay = document.querySelector("#rpOverlay");
const acceptButton = document.querySelector("#acceptDisclaimer");

acceptButton.addEventListener("click", () => {
  overlay.style.display = "none";
});