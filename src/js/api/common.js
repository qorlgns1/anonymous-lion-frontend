export const serverURL = "http://kihoonbae.shop:3000/boards";

export const createSendData = (method, bodyData) => {
  let sendData = {
    method: method,
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return sendData;
};
