const sizeInput = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

sizeInput.addEventListener('input', () => {
    const fontSize = sizeInput.value + 'px';
    textElement.style.fontSize = fontSize;
  });