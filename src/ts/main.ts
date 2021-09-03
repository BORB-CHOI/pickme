// import { random } from "./util";

import { Word } from "./util";

const P = document.querySelector(".p");

const handleClickP = (event: any): any => {
  const target = event.currentTarget;
  console.dir(target);

  setTimeout(() => {
    target.textContent = "Pi";
    target.style.fontSize = "90vh";
  }, 100);
  setTimeout(() => {
    target.textContent = "Pic";
    target.style.fontSize = "80vh";
  }, 150);
  setTimeout(() => {
    target.textContent = "Pick";
    target.style.fontSize = "60vh";
  }, 200);
  setTimeout(() => {
    target.textContent = "Pick m";
    target.style.fontSize = "40vh";
  }, 250);
  setTimeout(() => {
    target.textContent = "Pick me";
    target.style.fontSize = "30vh";
  }, 300);
  setTimeout(() => {
    target.textContent = "Pick_me";
    target.style.fontSize = "20vh";
    target.style.transform = "rotate(45deg)";
  }, 350);
  // const word_i = new Word();
  // const word_c = new Word();
  // const word_k = new Word();
  // const word_m = new Word();
  // const word_e = new Word();

  P.removeEventListener("click", handleClickP);
};

const handleEvent = (): any => {
  console.log(P);
  P.addEventListener("click", handleClickP);
};

const init = (): any => {
  handleEvent();
};

init();
