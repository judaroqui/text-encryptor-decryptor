// Función para eliminar acentos
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// Función para convertir a minúsculas
function toLowerCase(text) {
    return text.toLowerCase();
}

// Funciones de encriptar y desencriptar
function encryptText(text) {
    text = toLowerCase(removeAccents(text));
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptText(text) {
    text = toLowerCase(removeAccents(text));
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

document.getElementById('encrypt-button').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value.trim();
    const noMessage = document.getElementById('no-message');
    const resultText = document.querySelector('.result-text');
    
    if (inputText === "") {
        noMessage.style.display = 'block';
        resultText.innerText = '';
    } else {
        noMessage.style.display = 'none';
        const encryptedText = encryptText(inputText);
        resultText.innerText = encryptedText;
    }
});

document.getElementById('decrypt-button').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value.trim();
    const noMessage = document.getElementById('no-message');
    const resultText = document.querySelector('.result-text');
    
    if (inputText === "") {
        noMessage.style.display = 'block';
        resultText.innerText = '';
    } else {
        noMessage.style.display = 'none';
        const decryptedText = decryptText(inputText);
        resultText.innerText = decryptedText;
    }
});

document.getElementById('copy-button').addEventListener('click', function () {
    const resultText = document.querySelector('.result-text').innerText;

    navigator.clipboard.writeText(resultText).then(() => {
        const copyButton = document.getElementById('copy-button');
        copyButton.classList.add('copied');
    });
});

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


