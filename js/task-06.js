const textInput = document.getElementById('validation-input');
const validationLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
    if (textInput.value.length === parseInt(validationLength, 10)) { 
      textInput.classList.remove('invalid');
      textInput.classList.add('valid');
    } else {
      textInput.classList.remove('valid');
      textInput.classList.add('invalid');
    }
  });