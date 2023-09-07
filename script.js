document.addEventListener('DOMContentLoaded', function() {
    const csvUrl = 'YOUR_CSV_LINK_HERE';

    Papa.parse(csvUrl, {
        download: true,
        header: true,
        complete: function(results) {
            console.log(results.data);
            displayData(results.data);
        }
    });

    generateStars();
});

function displayData(data) {
    const container = document.querySelector('.container .info');
    data.forEach(entry => {
        container.innerHTML += `
            <div class="child-name">${entry.Name}</div>
            <div class="age">${entry.Age}</div>
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
