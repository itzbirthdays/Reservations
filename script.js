document.addEventListener('DOMContentLoaded', function() {
    Tabletop.init({
        key: '1WRKngZHrSUwTiXohWYOfT3VP-9hgetkRFb8pNc20JbI',  // This is your Google Sheet ID
        callback: showInfo,
        simpleSheet: true
    });
});

function showInfo(data, tabletop) {
    console.log(data);  // To verify the data

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
