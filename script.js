function alertMe() {
  alert("Hi there!")
}
// Script to add paragraph when button is clicked

const btn = document.querySelector("#btn-1");

function addParagraph() {
  const randomNum = Math.floor(Math.random() * 100);
  const paragraphContent = `The random number is: ` + randomNum;

  const newElement = document.createElement('p');
  newElement.textContent = paragraphContent;
  document.body.appendChild(newElement);
}

btn.onclick = addParagraph;