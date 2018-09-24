const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const convertToSecret = () => {
    document.getElementById('encodeBtn').addEventListener('click', (e) => {
        let inputString = encodeInput.value.split("");
        let outputArray = [];
        inputString.forEach((letter) => {
            outputArray.push(letter.charCodeAt())
        })
        printToDom(outputArray, 'encodeOutput');
    })
}

const convertToWords = () => {
    document.getElementById('decodeBtn').addEventListener('click', () => {
        let inputString = decodeInput.value;
        let outputArray = inputString.split(",");
        let finalOutput = '';
        for (let i = 0; i < outputArray.length; i++) {
            finalOutput += String.fromCharCode(outputArray[i])
        }
        printToDom(finalOutput, 'decodeOutput');
    })
}

convertToSecret();
convertToWords();