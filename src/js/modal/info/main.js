import { toggleModal } from "../common.js";

export const infoModal = () => {
  const targetModal = document.querySelector(".modal-info");
  
  const showInfoModalBtn = document.querySelector(".info");
  showInfoModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal(targetModal);
  });

  const closeInfoModalBtn = document.querySelector(".modal-info .btn-close");
  closeInfoModalBtn.addEventListener("click", () => {
    toggleModal(targetModal);
  });
};