// let par = document.createElement("p");
// par.innerText = "Hey I am Shravan";
// document.querySelector("body").append(par);


// let head = document.createElement("h1");
// head.innerText = "Hey this Head";
// document.querySelector("body").append(head)

// Mouse Event OnClick

// let click = document.querySelector("button");
// click.onclick = sayHello;

// function sayHello() {
//     console.log("hello click me");
// };

// addEventListner


let click = document.querySelector("button");
click.addEventListener("click", sayHello);

function sayHello() {
    alert("Haanji hum dab gye haii chod do");
}


let par = document.querySelector("p");
let box = document.querySelector(".box");

par.addEventListener("click", function(){
    par.innerText = "Heyy Muje Touch kyu kar rahe ho bhaii";
});

box.addEventListener("click", function(){
    box.style.backgroundColor = "red";
});

