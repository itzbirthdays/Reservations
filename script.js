document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < 50; i++) {
        createBalloon();
        createStar();
    }
});

function createBalloon() {
    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    let colors = ['red', 'blue', 'green', 'pink', 'yellow'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let startPos = Math.random() * 100;

    balloon.style.background = randomColor;
    balloon.style.left = startPos + 'vw';
    balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;

    document.body.appendChild(balloon);
}

function createStar() {
    let star = document.createElement('div');
    star.className = 'star';
    let colors = ['red', 'blue', 'green', 'pink', 'yellow'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let startPos = Math.random() * 100;

    star.style.backgroundColor = randomColor;
    star.style.left = startPos + 'vw';
    star.style.animationDuration = `${Math.random() * 3 + 5}s`;

    document.body.appendChild(star);
}
