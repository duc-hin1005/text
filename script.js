document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('heartContainer').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('click', function() {
    let yesButton = document.getElementById('yesButton');
    let currentSize = window.getComputedStyle(yesButton).fontSize;
    let newSize = parseFloat(currentSize) * 1.2;
    yesButton.style.fontSize = newSize + 'px';
});
