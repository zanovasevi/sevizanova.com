let buttons = document.getElementsByTagName('button');
let texts = document.getElementsByTagName('tbody');


for (let but of buttons) {
    but.addEventListener('click', onClick);
}

for (let text of texts) {
    text.style.display = 'none';
}

function onClick(ev) {
    ev.preventDefault();

    let hiddenText = ev.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('tbody')[0];

    if (ev.target.textContent == '+') {
        ev.target.textContent = '-';
        hiddenText.style.display = '';
    } else {
        ev.target.textContent = '+';
        hiddenText.style.display = 'none';
    }
}