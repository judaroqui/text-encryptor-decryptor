// Textos
const texts = {
    title: "Encriptador de Texto",
    infoText: "El encriptador transforma mayusculas<br> en minusculas y remueve acentos<br> sin problema.",
    noMessage: `
        <b>Ningún mensaje fue encontrado.</b><br>
        <br>Ingresa el texto que desees encriptar o desencriptar.
    `,
    invalidInput: `
        <b>Los números y caracteres especiales<br>no son permitidos.</b>
        <br><br>Ingresa el texto que desees encriptar o desencriptar.
    `,
    encryptButton: "Encriptar",
    decryptButton: "Desencriptar",
    inputPlaceholder: "Ingrese el texto aqui...",
    footerButton: `
        Juan David Rodriguez
        <img src="img/colombia.svg" alt="Bandera de Colombia" class="footer-image">
    `
};

document.addEventListener('DOMContentLoaded', () => {
    document.title = texts.title;
    document.querySelector('h1').innerHTML = `${texts.title} <span class="info-container">
        <img src="img/info.svg" alt="Info">
        <span class="info-text">${texts.infoText}</span>
    </span>`;
    document.getElementById('no-message').innerHTML = texts.noMessage;
    document.getElementById('invalid-input').innerHTML = texts.invalidInput;
    document.getElementById('encrypt-button').textContent = texts.encryptButton;
    document.getElementById('decrypt-button').textContent = texts.decryptButton;
    document.getElementById('input-text').placeholder = texts.inputPlaceholder;
    document.getElementById('linkedin-button').innerHTML = texts.footerButton;
});

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

// Función para limpiar el texto
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

// Verifica si el texto no contiene la clave encriptada
function textWithoutEncriptedKey(text) {
    const cleanedText = cleanText(text);
    const decryptedText = decryptText(cleanedText);
    return cleanedText === decryptedText;
}

// Evento para encriptar y desencriptar
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
        if (textWithoutEncriptedKey(inputText)) {
            // No cambiar el texto del área de resultados
        } else {
            const decryptedText = decryptText(inputText);
            resultText.innerText = decryptedText;
        }
    }
});

// Evento para copiar el texto
document.getElementById('copy-button').addEventListener('click', function () {
    const resultText = document.querySelector('.result-text').innerText;

    navigator.clipboard.writeText(resultText).then(() => {
        const copyButton = document.getElementById('copy-button');
        copyButton.classList.add('copied');
    });
});

// Evento para dark mode
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Evento para abrir el perfil de LinkedIn
document.addEventListener('DOMContentLoaded', function() {
    const linkedinButton = document.getElementById('linkedin-button');
    linkedinButton.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/judaroqui/', '_blank');
    });
});