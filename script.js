let h3CSS = document.querySelector("h3");
let color1 = document.getElementById("leftColorInput");
let color2 = document.getElementById("rightColorInput")
let body = document.getElementById("body")
let button = document.getElementById("button")

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
    h3CSS.textContent = body.style.background + ";"
}

function randomColorGenerator() {

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}


function randomGradientGenerator() {
    let randomNumberOne = "#" + randomColorGenerator();
    let randomNumberTwo = "#" + randomColorGenerator();

    body.style.background = `linear-gradient(to right, ${randomNumberOne}, ${randomNumberTwo}`;

    h3CSS.textContent = body.style.background + ";"
}

leftColorInput.addEventListener("input", setGradient)

rightColorInput.addEventListener("input", setGradient)

button.addEventListener("click", randomGradientGenerator);


