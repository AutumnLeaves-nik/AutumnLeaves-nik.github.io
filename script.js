function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.querySelector("button").onclick = function () {
    document.querySelector('h1').style.color = getRandomColor();
    this.style.Color = getRandomColor();
};




