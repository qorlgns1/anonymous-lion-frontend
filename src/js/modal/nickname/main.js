import { toggleModal } from "../common.js";

export const nicknameCheck = () => {
  const localStorageNickname = localStorage.getItem("nickname");
  return localStorageNickname ? true : false;
};

const localstorageNicknameSave = (input) => {
  localStorage.setItem("nickname", input.value);
};

const resetNicknameInput = (input) => {
  input.value = "";
};

const setNicknameBox = (myNickname) => {
  myNickname.textContent = `설정한 닉네임 : ${localStorage.getItem("nickname")}`;
};

export const nicknameModal = () => {
  const targetModal = document.querySelector(".modal-nickname");
  const myNicknameNode = document.querySelector(".my-nickname");
  if (!nicknameCheck()) {
    toggleModal(targetModal);
  } else {
    setNicknameBox(myNicknameNode);
  }

  const seveNicknameBtn = document.querySelector(".button-save-nickname");
  const $nicknameInput = document.querySelector(".container-form-nickname .input-form");

  seveNicknameBtn.addEventListener("click", function () {
    localstorageNicknameSave($nicknameInput); // 닉네임 로컬스토리지 저장
    setNicknameBox(myNicknameNode); // 닉네임 사용자에게 보여주기(업데이트)
    resetNicknameInput($nicknameInput); // 닉네임 input 초기화
    toggleModal(targetModal); // 닉네임 모달 닫기
  });

  const showNicknameModalBtn = document.querySelector(".nickname");
  showNicknameModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal(targetModal);
  });

  const closeNicknameModalBtn = document.querySelector(".modal-nickname .btn-close");
  closeNicknameModalBtn.addEventListener("click", () => {
    toggleModal(targetModal);
  });
};
