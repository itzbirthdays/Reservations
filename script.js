document.addEventListener('DOMContentLoaded', function() {
    Tabletop.init({
        key: '1WRKngZHrSUwTiXohWYOfT3VP-9hgetkRFb8pNc20JbI',
        callback: showInfo,
        simpleSheet: true
    });
});

function showInfo(data, tabletop) {
    const container = document.querySelector('.container .info');
    data.forEach(entry => {
        container.innerHTML += `
            <div class="child-name">${entry.Name}</div>
            <div class="age">${entry.Age}</div>
            <div class="room-number">${entry.RoomNumber}</div>
            <div class="reservation-time">${entry.ReservationTime}</div>
        `;
    });
}

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

// Create balloons and stars on page load
for(let i = 0; i < 50; i++) {
    createBalloon();
    createStar();
}
