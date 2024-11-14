
const tombola = document.getElementById('tombola');

const drawnNumbers=[];

for (let i = 0; i < 90; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.innerText = i + 1;
    tombola.appendChild(numberDiv);
}

const btnPrendi = document.getElementById('prendiNumero');
prendiNumero.addEventListener('click', function () {
    let numeriTotali = Math.floor(Math.random() * 90) + 1;

    const celle = document.querySelectorAll('#tombola div');
    for (let i = 0; i < celle.length; i++) {
        if (celle[i].innerText == numeriTotali) {
            celle[i].classList.add('numeriPresi');
        }
    }
    
})