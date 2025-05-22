/*
const canvas = document.getElementById("q");
const ctx = canvas.getContext("2d");

let letters = [];
const fontSize = 16;

function initMatrixRain() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / fontSize);
    letters = Array(columns).fill(0);
}

function drawMatrixRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = fontSize + "px monospace";

    letters.forEach((y, i) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = i * fontSize;
        ctx.fillText(text, x, y);

        letters[i] = (y > canvas.height + Math.random() * 1000) ? 0 : y + fontSize;
    });
}

initMatrixRain();
window.addEventListener("resize", initMatrixRain);
setInterval(drawMatrixRain, 70);
*/

/*
const canvas = document.getElementById("q");
const ctx = canvas.getContext("2d");

let letters = [];
const fontSize = 11;

function initMatrixRain() {
    canvas.width = window.innerWidth - 13;  // аналогично второму скрипту
    canvas.height = window.innerHeight;     // аналогично второму скрипту

    const columns = Math.floor(canvas.width / fontSize);
    letters = Array(columns).fill(1);
}

function drawMatrixRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#4a4a4a";
    ctx.font = fontSize + "px monospace";

    letters.forEach((y, i) => {
        const text = String.fromCharCode(65 + Math.floor(Math.random() * 33)); // буквы A и дальше
        const x = i * fontSize;
        ctx.fillText(text, x, y);

        // логику сброса позиции чуть изменил под второй скрипт
        letters[i] = (y > 758 + Math.random() * 10000) ? 0 : y + fontSize;
    });
}

initMatrixRain();
window.addEventListener("resize", initMatrixRain);
setInterval(drawMatrixRain, 70);
*/