document.addEventListener('DOMContentLoaded', function() {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLFJ-ARR393KF4Z6I2FYsYco265ddxfOd8YA37e5qCg6AJe4VpXUF7OwSulPmPX0SyA2apYW7OumWd/pub?output=csv'; // Replace with your CSV link

    Papa.parse(csvUrl, {
        download: true,
        header: true,
        complete: function(results) {
            console.log(results.data);
            displayData(results.data);
        }
    });
});

function displayData(data) {
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
