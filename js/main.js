import DATA from "./opr.js";
import res from "./result.js";
let tex1 = document.querySelector("#tex1");
let tex2 = document.querySelector("#tex2");
let tex3 = document.querySelector("#tex3");
let button = document.querySelector("#button");
let vopros = document.querySelector("#vopros");
var buttons = document.getElementsByClassName(".btn");
var buttons2 = document.getElementsByClassName("btn2");
var buttons3 = document.getElementsByClassName("btn3");
let aa;
let opros1;
let opros2;
let opros3;
let ochred = 0;

vopros.innerText = DATA[ochred].vopros1;
tex1.innerText = DATA[ochred].vopros11[0].value;
tex2.innerText = DATA[ochred].vopros11[1].value;
tex3.innerText = DATA[ochred].vopros11[2].value;

tex1.addEventListener("click", () => {
  opros1 = 1;
  console.log(opros1);
  opros2 = 0;
  opros3 = 0;
  tex1.style.backgroundColor = "green";
  tex2.style.backgroundColor = "white";
  tex3.style.backgroundColor = "white";
});

tex2.addEventListener("click", () => {
  opros2 = 1;
  console.log(opros2);
  opros1 = 0;
  opros3 = 0;
  tex1.style.backgroundColor = "white";
  tex2.style.backgroundColor = "green";
  tex3.style.backgroundColor = "white";
});

tex3.addEventListener("click", () => {
  opros3 = 1;
  console.log(opros3);
  opros1 = 0;
  opros2 = 0;
  tex1.style.backgroundColor = "white";
  tex2.style.backgroundColor = "white";
  tex3.style.backgroundColor = "green";
});

button.addEventListener("click", () => {
  if (opros1 === 1) {
    tex1.style.backgroundColor = "white";
    tex2.style.backgroundColor = "white";
    tex3.style.backgroundColor = "white";
    res[ochred][1].push(1);
    console.log(res[ochred][1]);
    console.log("Ответ№1", opros1);
    ochred++;
    vopros.innerText = DATA[ochred].vopros1;
    tex1.innerText = DATA[ochred].vopros11[0].value;
    tex2.innerText = DATA[ochred].vopros11[1].value;
    tex3.innerText = DATA[ochred].vopros11[2].value;
    opros1 = 0;
    opros2 = 0;
    opros3 = 0;
  } else if (opros2 === 1) {
    tex1.style.backgroundColor = "white";
    tex2.style.backgroundColor = "white";
    tex3.style.backgroundColor = "white";
    res[ochred][2].push(1);
    console.log("Ответ№2", opros2);
    ochred++;
    vopros.innerText = DATA[ochred].vopros1;
    tex1.innerText = DATA[ochred].vopros11[0].value;
    tex2.innerText = DATA[ochred].vopros11[1].value;
    tex3.innerText = DATA[ochred].vopros11[2].value;
    console.log(ochred);
    opros1 = 0;
    opros2 = 0;
    opros3 = 0;
  } else if (opros3 === 1) {
    tex1.style.backgroundColor = "white";
    tex2.style.backgroundColor = "white";
    tex3.style.backgroundColor = "white";
    res[ochred][3].push(1);
    console.log("Ответ№3", opros3);
    ochred++;
    vopros.innerText = DATA[ochred].vopros1;
    tex1.innerText = DATA[ochred].vopros11[0].value;
    tex2.innerText = DATA[ochred].vopros11[1].value;
    tex3.innerText = DATA[ochred].vopros11[2].value;
    console.log(ochred);
    opros1 = 0;
    opros2 = 0;
    opros3 = 0;
    res[ochred][3].push(1);
  } else {
    console.log("Ни один из вариантов не выбран");
  }
});

export default aa;

if (ochred == 10) {
}
