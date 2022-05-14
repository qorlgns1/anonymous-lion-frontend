export const createBoard = (data) => {
  const liNode = document.createElement("li");
  const nicknameNode = document.createElement("p");
  nicknameNode.classList.add("nickname");

  const imgNode = document.createElement("img");
  imgNode.src = `./src/images/character/boy-${parseInt(Math.random() * 10) % 5}.svg`;

  const descriptionNode = document.createElement("p");
  descriptionNode.classList.add("content");

  const { nickname, description } = data;
  nicknameNode.textContent = `${nickname}`;
  descriptionNode.textContent = `${description}`;

  liNode.append(nicknameNode, imgNode, descriptionNode);

  return liNode;
};
