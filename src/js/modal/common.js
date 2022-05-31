export function toggleModal(modal) {
  modal.classList.toggle("on");
}

export function shakeBox(node, second) {
  node.classList.add("form-shake");
  setTimeout(() => {
    node.classList.remove("form-shake");
  }, second * 1000);
}
