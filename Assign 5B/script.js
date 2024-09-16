let intervalId;
let remainingTime = 0;

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

function startTimer() {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    remainingTime = minutes * 60 + seconds;

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(intervalId);
        document.getElementById('timer').textContent = "00:00";
        return;
    }

    remainingTime--;
    const mins = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;

    document.getElementById('timer').textContent = 
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function pauseTimer() {
    if (intervalId) {
        clearInterval(intervalId);
    }
}

function resetTimer() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    remainingTime = 0;
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('timer').textContent = "00:00";
}
