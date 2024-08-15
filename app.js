// Función para eliminar caracteres especiales y números
function removeSpecialChatAndNum(text) {
    return text.replace(/[^a-zA-Z\s]/g, '');
}

// Función para eliminar acentos
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para convertir a minúsculas
function toLowerCase(text) {
    return text.toLowerCase();
}

// Función combinada para limpiar el texto
function cleanText(text) {
    text = removeAccents(text);
    text = removeSpecialChatAndNum(text);
    return toLowerCase(text);
}

// Funciones de encriptar y desencriptar
function encryptText(text) {
    text = cleanText(text);
    if (text === "") return ""; 
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decryptText(text) {
    text = cleanText(text);
    if (text === "") return ""; 
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Verifica si el texto contiene solo números o caracteres especiales
function isInvalidInput(text) {
    return /^[^a-zA-Z]*$/.test(text);
}

document.getElementById('encrypt-button').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value.trim();
    const noMessage = document.getElementById('no-message');
    const invalidInputMessage = document.getElementById('invalid-input');
    const resultText = document.querySelector('.result-text');

    if (inputText === "") {
        noMessage.style.display = 'block';
        invalidInputMessage.style.display = 'none';
        resultText.innerText = '';
    } else if (isInvalidInput(inputText)) {
        noMessage.style.display = 'none';
        invalidInputMessage.style.display = 'block';
        resultText.innerText = '';
    } else {
        noMessage.style.display = 'none';
        invalidInputMessage.style.display = 'none';
        const encryptedText = encryptText(inputText);
        resultText.innerText = encryptedText;
    }
});

document.getElementById('decrypt-button').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value.trim();
    const noMessage = document.getElementById('no-message');
    const invalidInputMessage = document.getElementById('invalid-input');
    const resultText = document.querySelector('.result-text');

    if (inputText === "") {
        noMessage.style.display = 'block';
        invalidInputMessage.style.display = 'none';
        resultText.innerText = '';
    } else if (isInvalidInput(inputText)) {
        noMessage.style.display = 'none';
        invalidInputMessage.style.display = 'block';
        resultText.innerText = '';
    } else {
        noMessage.style.display = 'none';
        invalidInputMessage.style.display = 'none';
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

document.addEventListener('DOMContentLoaded', function() {
    const linkedinButton = document.getElementById('linkedin-button');
    linkedinButton.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/judaroqui/', '_blank');
    });
});