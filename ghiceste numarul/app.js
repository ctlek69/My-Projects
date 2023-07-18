const min = document.getElementById("min");
const max = document.getElementById("max");
const val = document.getElementById("txtNumar");
const btn = document.getElementById("btnGhiceste");
const msg = document.getElementById("mesaj");
const corect = document.getElementById("raspuns");

let gameOver;
let incercari;

let minVal, maxVal, valoareGenerata;
minVal = 0;
maxVal = 20;
valoareGenerata = genereazaNumar(minVal, maxVal);

min.textContent = minVal;
max.textContent = maxVal;

btn.addEventListener('click', () => {
    if(gameOver) {
        resetGame();
        return;
    }
    if(val.value == '' || isNaN(val.value)) {
        msg.textContent ='Introdu un numar';
        return;
    }
    let userVal = parseInt(val.value);
    if(userVal != valoareGenerata) {
        incercari --;
        if(incercari == 0) {
            onGameOver();
            msg.textContent = 'Game Over';
            corect.textContent = `Raspuns corect: ${valoareGenerata}`;
        } else {
            msg.textContent = 'Mai incearca';
        }
    } else {
        onGameOver();
        msg.textContent = 'Felicitari! Ai ghicit.';
        corect.textContent = `Raspuns corect: ${valoareGenerata}`;
    }
});
function onGameOver() {
    gameOver = true;
    val.disabled = true;
    btn.textContent = "Mai joaca odata";
}
function resetGame() {
    gameOver = false;
    val.disabled = false;
    val.value = "";
    btn.textContent = "Ghiceste";
    incercari = 5;
    msg.textContent = "";
    corect.textContent = "";
    valoareGenerata = genereazaNumar(minVal, maxVal);
    console.log(valoareGenerata);
}

function genereazaNumar(minVal, maxVal) {
    minVal = Math.ceil(minVal);
    maxVal = Math.floor(maxVal);
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
  }

console.log(valoareGenerata);




