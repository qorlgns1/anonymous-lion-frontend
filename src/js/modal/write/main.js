import { createSendData, serverURL } from "../../api/common.js";
import { loadBoardData } from "../../api/loadBoardData.js";
import { toggleModal } from "../common.js";
import { shakeBox } from "../common.js";
import { nicknameCheck } from "../nickname/main.js";

const resetWriteBox = (textarea) => {
  textarea.value = "";
};

export const writeModal = () => {
  const targetModal = document.querySelector(".modal-write");
  const nicknameModal = document.querySelector(".modal-nickname");
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
      toggleModal(targetModal);
      toggleModal(nicknameModal);
      return;
    }

    const textboxSize = textBox.value.trim();
    if (!textboxSize) {
      shakeBox(textBox, 0.5);
      return;
    }

    const sendData = {
      nickname: localStorage.getItem("nickname"),
      description: textBox.value,
    };

    // 서버에 POST 요청시 처리 속도가 느려서 먼저 텍스트박스를 지우고 모달을 닫기위해
    // fetch 안에 안넣고 위로 올림
    resetWriteBox(textBox);
    toggleModal(targetModal);

    fetch(serverURL, createSendData("POST", sendData)).then(() => {
      location.reload();
    });
  });
};
