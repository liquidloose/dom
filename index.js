const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
const contentTwo = document.createElement("p");
contentTwo.textContent = "Hey I'm red!";
contentTwo.style.color = "red";
const header = document.createElement("h3");
header.style.color = "green";
header.textContent = "I'm a green h3!";
const blackDiv = document.createElement("div");
blackDiv.textContent = "I'm a black border";
blackDiv.style.border = "5px solid black";
const blackHeader = document.createElement("h1");
blackHeader.textContent = "I'm in a div";
const meToo = document.createElement("p");
meToo.textContent = "Me too!";

container.appendChild(content);
container.appendChild(contentTwo);
container.appendChild(header);
container.appendChild(blackDiv);
blackDiv.appendChild(blackHeader);
blackDiv.appendChild(meToo);

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "orange";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});