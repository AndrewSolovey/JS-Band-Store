document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const signInButton = document.querySelector('.cart_purchase');
    const usernameHint = document.getElementById('usernameHint');
    const authForm = document.getElementById('authForm');

    function updateSignInButton() {
        const usernameLength = usernameInput.value.length;

        if (usernameLength === 0 || usernameLength < 4 || usernameLength > 16) {
            signInButton.disabled = true;
            signInButton.classList.remove('enabled');
            if (usernameLength > 0 && (usernameLength < 4 || usernameLength > 16)) {
                usernameHint.textContent = 'Username must be at least 4 characters and not more than 16';
                usernameHint.style.fontSize = '1.4rem';
                usernameHint.style.color = "red";
                usernameHint.style.textAlign = "center";
            } else {
                usernameHint.textContent = '';
            }
        } else {
            signInButton.disabled = false;
            signInButton.classList.add('enabled');
            usernameHint.textContent = '';
        }
    }

    // Зберегти ім'я користувача в localStorage при натисканні кнопки
    authForm.addEventListener('submit', function(event) {
        const username = usernameInput.value;
        localStorage.setItem('username', username);
    });

    usernameInput.addEventListener('input', updateSignInButton);

    // Викликати функцію, щоб оновити стан кнопки при завантаженні сторінки
    updateSignInButton();
});






