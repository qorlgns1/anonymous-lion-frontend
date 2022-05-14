import { createSendData, serverURL } from "../../api/common.js";
import { loadBoardData } from "../../api/loadBoardData.js";
import { toggleModal } from "../common.js";
import { nicknameCheck } from "../nickname/main.js";

export const writeModal = () => {
  const targetModal = document.querySelector(".modal-write");
  const showWriteModalBtn = document.querySelector(".add");

  showWriteModalBtn.addEventListener("click", () => {
    toggleModal(targetModal);
  });

  const closeWriteModalBtn = document.querySelector(".modal-write .btn-close");
  closeWriteModalBtn.addEventListener("click", () => {
    toggleModal(targetModal);
  });

  const textBox = document.querySelector(".modal-write .textarea-form");
  const saveBtn = document.querySelector(".container-form-write .button-write-form");
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!nicknameCheck()) {
      alert("먼저 닉네임을 등록해주세요!");
      return;
    }

    const sendData = {
      nickname: localStorage.getItem("nickname"),
      description: textBox.value,
    };

    fetch(serverURL, createSendData("POST", sendData)).then(() => {
      loadBoardData();
      toggleModal(targetModal);
    });
  });
};
