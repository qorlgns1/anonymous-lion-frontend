import { createBoard } from "../board/createBoard.js";
import { serverURL, createSendData } from "./common.js";

export const loadBoardData = () => {
  const dataList = document.querySelector(".list-board");

  fetch(serverURL, createSendData("GET"))
    .then((res) => res.json())
    .then((dataArr) => {
      while (dataList.hasChildNodes()) {
        dataList.removeChild(dataList.firstChild);
      }

      if (dataArr.length % 2) {
        dataArr.push({});
      }

      dataArr.forEach((data) => {
        const board = createBoard(data);
        dataList.appendChild(board);
      });
    });
};
