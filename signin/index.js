document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const usernameHint = document.createElement('div');
    usernameHint.classList.add('username_hint');
    usernameHint.style.fontSize = '1.4rem'; // Встановіть розмір шрифту одразу
    usernameInput.parentNode.appendChild(usernameHint);

    usernameInput.addEventListener('input', () => {
        const value = usernameInput.value;
        if (value.length < 4 || value.length > 16) {
            usernameHint.textContent = 'Username must be at least 4 characters and not more than 16.';
        } else {
            usernameHint.textContent = '';
        }
    });

    document.querySelector('form').addEventListener('submit', (event) => {
        const value = usernameInput.value;
        if (value.length === 0 || value.length < 4 || value.length > 16) {
            event.preventDefault();
            usernameHint.textContent = 'Username must be at least 4 characters and not more than 16.';
            // usernameHint.style.fontSize = '14px'; // Встановіть розмір шрифту у разі помилки
        } else {
            // Перенаправлення до сторінки списку книг
            window.location.href = '../book-list/index.html'; // Вкажіть правильний шлях до вашої сторінки
        }
    });
});

