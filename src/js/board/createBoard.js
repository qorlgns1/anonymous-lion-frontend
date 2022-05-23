export const createBoard = (data) => {
  const liNode = document.createElement("li");

  const nicknameNode = document.createElement("p");
  nicknameNode.classList.add("nickname");

  const imgNode = document.createElement("img");
  imgNode.src = `./src/images/character/user-${parseInt(Math.random() * 10) % 10}.png`;

  const descriptionNode = document.createElement("p");
  descriptionNode.classList.add("content");

  const { nickname, description } = data;
  nicknameNode.innerHTML = `<strong>${nickname}</strong> 님의 진솔한 이야기`;
  descriptionNode.textContent = `${description}`;

  liNode.append(imgNode, nicknameNode, descriptionNode);

  return liNode;
};
