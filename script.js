const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
document.querySelector('.current-day').innerText = today;

// For displaying current time
const currentTimeElem = document.getElementById('current-time');
setInterval(() => {
    const timeNow = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    currentTimeElem.textContent = timeNow;
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLFJ-ARR393KF4Z6I2FYsYco265ddxfOd8YA37e5qCg6AJe4VpXUF7OwSulPmPX0SyA2apYW7OumWd/pub?output=csv';

    Papa.parse(csvUrl, {
        download: true,
        header: true,
        complete: function(results) {
            const filteredData = results.data.filter(entry => entry.Day === today);
            displayData(filteredData);
            adjustScrolling(filteredData.length);
            generateStars();
        }
    });
});

function displayData(data) {
    const container = document.querySelector('.content');
    data.forEach(entry => {
        container.innerHTML += `
            <div class="child-name">${entry.Name}</div>
            <div class="room">${entry.Room}</div>
            <div class="time">${entry.Time}</div>
            <div class="marketing">${entry.Marketing ? entry.Marketing.replace(/\n/g, '<br>') : ''}</div>
        `;
    });
}

function adjustScrolling(dataLength) {
    const content = document.querySelector('.content');
    if (dataLength > 5) { 
        const contentHeight = content.scrollHeight;
        const containerHeight = document.querySelector('.container').clientHeight;
        const translateYValue = ((contentHeight - containerHeight) / contentHeight) * 100;

        const animationStyle = `
            @keyframes autoscroll {
                0%, 25%, 75%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-${translateYValue}%);
                }
            }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = animationStyle;
        document.head.appendChild(styleSheet);

        content.style.animation = 'autoscroll 120s linear infinite';
    } else {
        content.style.animation = 'none';  
    }
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
        star.style.setProperty('--spin-duration', `${3 + Math.random() * 5}s`);
        star.style.setProperty('--spin-amount', `${360 * (Math.random() < 0.5 ? 1 : -1)}deg`);
        document.body.appendChild(star);
    }
}
