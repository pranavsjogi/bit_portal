const captchatextbox = document.querySelector(".captcha input");
const refreshbutton = document.querySelector(".refresh");
const captchainputbox = document.querySelector(".c_input input");
const message = document.querySelector(".try_again");
const submitbutton = document.querySelector(".login_btn");

let captchatext = null;

const generatecaptcha = () => {
  const randomstring = Math.random().toString(36).substring(2, 7);
  const randomstringarray = randomstring.split("");
  const changestring = randomstringarray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  );
  captchatext = changestring.join("  ");
  captchatextbox.value = captchatext;

  console.log(randomstringarray, changestring);
};
const refreshbtnclick = () => {
  generatecaptcha();
  captchainputbox.value = "";
  captchakeyupvalidate();
};
const captchakeyupvalidate = () => {
  submitbutton.classList.toggle("disabled", !captchainputbox, value);
  if (captchainputbox.value === " ") {
    message.classList.remove("active");
  }
};
const submitbtnclick = () => {
  captchatext = captchatext.split("");

  captchatext = captchatext.filter((char) => char !== " ");
  captchatext = captchatext.join("");
  message.classList.add("active");
  if (captchainputbox.value != captchatext) {
    message.style.display = inline;
  }
};
refreshbutton.addEventListener("click", refreshbtnclick);
captchainputbox.addEventListener("keyup", captchakeyupvalidate);
submitbutton.addEventListener("click", submitbtnclick);

generatecaptcha();
