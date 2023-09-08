const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

document.querySelector('.current-day').innerText = today;

document.addEventListener('DOMContentLoaded', function() {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLFJ-ARR393KF4Z6I2FYsYco265ddxfOd8YA37e5qCg6AJe4VpXUF7OwSulPmPX0SyA2apYW7OumWd/pub?output=csv';

    Papa.parse(csvUrl, {
        download: true,
        header: true,
        complete: function(results) {
            displayData(results.data.filter(entry => entry.Day === today));
            adjustScrolling();  // call after the data is displayed
        }
    });

    generateStars();
});

function displayData(data) {
    const container = document.querySelector('.content');  // Adjusted to target .content directly
    data.forEach(entry => {
        container.innerHTML += `
            <div class="child-name">${entry.Name}</div>
            <div class="room">${entry.Room}</div>
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
        document.body.appendChild(star);
    }
}

function adjustScrolling() {
    const content = document.querySelector('.content');   // Updated to target the .content
    const contentHeight = content.scrollHeight;
    const containerHeight = document.querySelector('.container').clientHeight; // Use container's height

    if (contentHeight > containerHeight) {
        const translateYValue = ((contentHeight - containerHeight) / contentHeight) * 100;
        const animationStyle = `
            @keyframes autoscroll {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-${translateYValue}%);
                }
                100% {
                    transform: translateY(0);
                }
            }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = animationStyle;
        document.head.appendChild(styleSheet);

        content.style.animation = 'autoscroll 60s linear infinite'; // Apply animation to .content
    }
}
