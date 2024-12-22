
const timer = document.getElementById('countdown');

timer.addEventListener('mousedown', (e) => {
    let offsetX = e.clientX - timer.offsetLeft;
    let offsetY = e.clientY - timer.offsetTop;

    function onMouseMove(event) {
        timer.style.left = event.clientX - offsetX + 'px';
        timer.style.top = event.clientY - offsetY + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Таймер зворотного відліку
function updateCountdown() {
    const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = newYearDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        days + 'д ' + hours + 'г ' + minutes + 'м ' + seconds + 'с';

    if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = 'Щасливого Нового Року!';
    }
}

setInterval(updateCountdown, 1000);
for (let i = 0; i < 100; i++) {
    let snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';  // випадковий час падіння
    document.getElementById('snow').appendChild(snowflake);
}
