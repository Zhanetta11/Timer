let deadline = '2025-01-01 00:00';

const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor(total / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(total / (1000 * 60) % 60);
    const seconds = Math.floor(total / 1000 % 60);

    return { total, days, hours, minutes, seconds };
};

const timer = () => {
    const data = getTimeRemaining(deadline);
    const deadLine = document.querySelector('.timer__total');
    deadLine.textContent = `Deadline: ${deadline.replace('T', ' ')}`;
    
    document.querySelector('.timer__days').textContent = `Days: ${data.days}`;
    document.querySelector('.timer__hours').textContent = `Hours: ${data.hours}`;
    document.querySelector('.timer__minutes').textContent = `Minutes: ${data.minutes}`;
    document.querySelector('.timer__seconds').textContent = `Seconds: ${data.seconds}`;

    if (data.total < 0) {
        clearInterval(interval);
        alert('Time is over!');
        document.querySelector('.timer__days').textContent = `Days: 0`;
        document.querySelector('.timer__hours').textContent = `Hours: 0`;
        document.querySelector('.timer__minutes').textContent = `Minutes: 0`;
        document.querySelector('.timer__seconds').textContent = `Seconds: 0`;
    }
};

let interval = setInterval(timer, 1000);

const form = document.getElementById('deadline-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const deadlineInput = document.getElementById('deadline-input').value;
    if (deadlineInput) {
        deadline = deadlineInput.replace('T', ' ');
    }

    clearInterval(interval);
    interval = setInterval(timer, 1000);
});