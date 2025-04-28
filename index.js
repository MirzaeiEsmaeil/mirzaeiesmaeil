const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const form = modal.querySelector("form");

openBtn.onclick = () => {
  form.reset();
  modal.classList.remove("hidden");
};

closeBtn.onclick = () => modal.classList.add("hidden");

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
};