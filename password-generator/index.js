const characters = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={}[],|:;<>./?"
};

function generatePassword() {
    let chars = characters.letters;
    const passwordLength = document.getElementById("passwordLength").value;
    
    if (document.getElementById("includeNumbers").checked) {
        chars += characters.numbers;
    }
    if (document.getElementById("includeSymbols").checked) {
        chars += characters.symbols;
    }

    let password = '';

    for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("passwordField").value = password;
}

function updateLengthValue() {
    const length = document.getElementById("passwordLength").value;
    document.getElementById("lengthValue").innerText = length;
}

function copyToClipboard() {
    const passwordField = document.getElementById("passwordField");
    passwordField.select();
    document.execCommand("copy");
}





