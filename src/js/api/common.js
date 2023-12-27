export const serverURL = "http://152.67.234.103:3000/boards";

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
