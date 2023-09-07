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
    
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.borderRadius = '50%';
    balloon.style.background = 'red'; // Change to desired color or make random
    balloon.style.position = 'absolute';
    balloon.style.bottom = '-10%';
    balloon.style.left = startPos + 'vw';
    balloon.style.animation = `float ${Math.random() * 3 + 5}s linear infinite`;

    document.body.appendChild(balloon);
}

