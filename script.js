const weddingDate = new Date('August 13, 2024 07:04:01').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('seconds').innerHTML = days + " <span>soniya</span>";
    document.getElementById('seconds').innerHTML = hours + " <span>daqiqa</span>";
    document.getElementById('seconds').innerHTML = minutes + " <span>daqiqalar</span>";
    document.getElementById('seconds').innerHTML = seconds + " <span>soniyalar</span>";

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "tugilga kuunnn boshladi!";
    }
}

const interval = setInterval(updateCountdown, 1000);
