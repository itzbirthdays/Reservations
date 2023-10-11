const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

document.querySelector('.current-day').innerText = today;

document.addEventListener('DOMContentLoaded', function() {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLFJ-ARR393KF4Z6I2FYsYco265ddxfOd8YA37e5qCg6AJe4VpXUF7OwSulPmPX0SyA2apYW7OumWd/pub?output=csv';

    Papa.parse(csvUrl, {
        download: true,
        header: true,
        complete: function(results) {
            displayData(results.data.filter(entry => entry.Day === today));
        }
    });

    generateStars();
});

function displayData(data) {
    const container = document.querySelector('.content');
    data.forEach(entry => {
        container.innerHTML += `
            <div class="child-name">${entry.Name}</div>
            <div class="room">${entry.Room}</div>
            <div class="marketing">${entry.Marketing}</div>
            <div class="time">${entry.Time}</div>
        `;
    });
}

function generateStars() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.width = `${(Math.random() * 15) + 5}px`;
        star.style.height = star.style.width;
        star.style.setProperty('--spin-duration', `${2 + Math.random() * 5}s`); // random duration
        star.style.setProperty('--spin-amount', `${(Math.random() < 0.5 ? 360 : -360)}deg`); // random direction of spin
        document.body.appendChild(star);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...

    // Initialize time display
    updateTime();
    setInterval(updateTime, 1000); // Update every second
});

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); // This will format as e.g. "12:35:47 PM"
    document.getElementById('current-time').textContent = timeString;
}
