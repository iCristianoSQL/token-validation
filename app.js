const tokenValue = document.querySelector("#token");
const tokenMessage = document.querySelector("#token-message");
const userToken = document.querySelector("#user-token");
let finalToken = Math.random().toString().split(".")[1].substring(0, 6);

tokenValue.textContent = finalToken;

setInterval(() => {
  finalToken = Math.random().toString().split(".")[1].substring(0, 6);
  tokenValue.textContent = finalToken;
}, 10000);

const myFunction = () => {
  tokenMessage.textContent =
    (userToken.value === finalToken && "O token é valido") ||
    "O token não é valido";
};
