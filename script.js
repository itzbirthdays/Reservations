document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < 50; i++) {
        createBalloon();
    }
});

function createBalloon() {
    let balloon = document.createElement('div');
    balloon.className = 'balloon';
    let size = Math.random() * 20 + 10; // random size between 10 and 30
    let startPos = Math.random() * 100; // random start position
    let colors = ['red', 'blue', 'green', 'pink'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.left = startPos + 'vw';
    balloon.style.background = randomColor;
    balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;

    document.body.appendChild(balloon);
}
