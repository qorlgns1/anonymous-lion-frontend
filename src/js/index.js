import { createLiObserver } from "./api/loadBoardData.js";
import { nicknameModal } from "./modal/nickname/main.js";
import { writeModal } from "./modal/write/main.js";

createLiObserver();
nicknameModal();
writeModal();
