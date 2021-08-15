import { isInterfaceDeclaration } from "typescript";
// import { random } from "./util";

const P = document.querySelector(".p");

const handleClickP = (event:any):any =>{
  const target =  event.currentTarget;
  console.dir(target);
  target.textContent = 'Pick me';
  target.style.fontSize = '30vh';
  add

};

const handleEvent = ():any => {
  console.log(P);
  P.addEventListener('click', handleClickP);
};

const init = ():any => {
  handleEvent();
};

init();