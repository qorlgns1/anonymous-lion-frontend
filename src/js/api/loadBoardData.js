import { createBoard } from "../board/createBoard.js";
import { serverURL, createSendData } from "./common.js";

const manageLoadBoardIndex = () => {
  let index = 0;
  return {
    increase: function () {
      index += 8;
    },
    getIndex: function () {
      return index;
    },
  };
};

const loadBoardIndex = manageLoadBoardIndex();

export async function loadBoardData() {
  const dataList = document.querySelector(".list-board");
  await fetch(`${serverURL}/${loadBoardIndex.getIndex()}`, createSendData("GET"))
    .then((res) => res.json())
    .then((dataArr) => {
      const docfrag = document.createDocumentFragment();
      dataArr.forEach((data) => {
        const board = createBoard(data);
        docfrag.appendChild(board);
      });
      dataList.appendChild(docfrag);
    });
}

export const createLiObserver = () => {
  const ul = document.querySelector(".list-board");
  let li = ul.querySelector("li:last-child");
  let flag = false;
  if (!li) {
    li = document.createElement("li");
    ul.appendChild(li);
    flag = true;
  }

  // 1. 인터섹션 옵저버 생성
  const io = new IntersectionObserver(
    (entry, observer) => {
      // 3. 현재 보이는 target 출력(li)
      const ioTarget = entry[0].target;
      // 4. viewport에 target이 보이면 하는 일
      if (entry[0].isIntersecting) {
        // 5. 현재 보이는 target 감시 취소해줘
        io.unobserve(ioTarget);

        // 6. 데이터 불러오기
        loadBoardData().then(() => {
          if (flag) {
            ul.children[0].remove();
            flag = false;
          }

          loadBoardIndex.increase();

          // 7. 마지막 li 감시
          let lastLi = document.querySelector(".list-board > li:last-child");
          io.observe(lastLi);
        });
      }
    },
    {
      // 8. 타겟이 10% 이상 보이면 해줘!
      threshold: 0.1,
    },
  );

  // 2. li 감시
  io.observe(li);
};
