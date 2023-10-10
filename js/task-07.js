const sizeInput = document.getElementById('font-size-control');
const textElement = document.getElementById('text');


textElement.style.fontSize = sizeInput.value + 'px';

sizeInput.addEventListener('input', () => {
    const fontSize = sizeInput.value + 'px';
    textElement.style.fontSize = fontSize;
});
