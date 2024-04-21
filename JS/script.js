document.addEventListener('DOMContentLoaded', function () {
    // Виберіть елементи
    const adModal = document.getElementById('ad-modal');
    const timerSpan = document.getElementById('timer-span');
    const closeBtn = document.querySelector('.close-btn');

    // Поява модального вікна через 2 секунди (приклад)
    setTimeout(function () {
        adModal.style.display = 'block';
    }, 2000);

    // Закриття рекламного вікна
    function closeAdModal() {
        adModal.style.display = 'none';
    }

    // Додавання обробника подій до хрестика
    closeBtn.addEventListener('click', closeAdModal);

    // Відлік часу
    let secondsLeft = 7;
    timerSpan.innerText = secondsLeft;

    const timerInterval = setInterval(function () {
        secondsLeft--;
        timerSpan.innerText = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
});
