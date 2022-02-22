let buttons = document.getElementsByTagName('button');
let texts = document.getElementsByClassName('text');


for (let but of buttons) {
    but.addEventListener('click', onClick);
}

for (let text of texts) {
    text.style.display = 'none';
}

function onClick(ev) {
    ev.preventDefault();

    let hiddenText = ev.target.parentElement.parentElement.getElementsByTagName('span')[4];
    let points = ev.target.parentElement.getElementsByTagName('span')[0];

    if (ev.target.textContent == 'show more') {
        ev.target.textContent = 'show less';
        hiddenText.style.display = '';
        points.style.visibility = 'hidden';

    } else {
        ev.target.textContent = 'show more';
        hiddenText.style.display = 'none';
        points.style.visibility = '';
    }
}