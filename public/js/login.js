const passwordInput = document.getElementById('password');
const showPasswordToggle = document.getElementById('showPasswordToggle');

showPasswordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordToggle.querySelector('img').src = '/icon/eye.svg';
    } else {
        passwordInput.type = 'password';

        showPasswordToggle.querySelector('img').src = '/icon/eye-slash.svg'
    }
});