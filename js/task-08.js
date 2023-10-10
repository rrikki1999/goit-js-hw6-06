const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки при відправленні форми

  const formData = new FormData(loginForm);
  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (!userData.email || !userData.password) {
    alert('Будь ласка, заповніть всі поля форми.');
  } else {
    console.log('Дані з форми:', userData);
    loginForm.reset(); // Очищаємо значення полів форми
  }
});
