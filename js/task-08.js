function submitForm(event) {
  event.preventDefault(); // Зупиняємо стандартну відправку форми, щоб сторінка не перезавантажувалася

  const form = event.target; // Отримуємо форму
  const elements = form.elements; // Отримуємо всі елементи форми

  let formData = {}; // Об'єкт для зберігання даних з форми

  // Перебираємо всі елементи форми
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value; // Додаємо значення елементів до об'єкта formData
    }
  }

  // Перевіряємо, чи всі поля заповнені
  if (Object.values(formData).every(value => value.trim() !== "")) {
    console.log(formData); // Виводимо об'єкт із введеними даними в консоль
    form.reset(); // Очищаємо значення полів форми
  } else {
    alert("Усі поля повинні бути заповнені!"); // Попередження про незаповнені поля
  }
}