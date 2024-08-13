// common.js
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const userElement = document.querySelector('.user span');
    const avatar = document.getElementById('avatar');
    const savedAvatar = localStorage.getItem('avatar');
    const avatarInput = document.getElementById('avatarInput');
    const signOutButton = document.querySelector('.sign-out');

    // Встановлення ім'я користувача та аватару
    if (username) {
        userElement.textContent = username;
    }

    if (savedAvatar) {
        avatar.src = savedAvatar;
    }

    // Зміна аватару
    avatar.addEventListener('click', function() {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const dataURL = e.target.result;
                avatar.src = dataURL;
                localStorage.setItem('avatar', dataURL);
            };
            reader.readAsDataURL(file);
        }
    });

    // Вихід з акаунту
    if (signOutButton) {
        signOutButton.addEventListener('click', function() {
            localStorage.removeItem('username');
            localStorage.removeItem('avatar');
            window.location.href = '../signin/index.html';
        });
    }
});
