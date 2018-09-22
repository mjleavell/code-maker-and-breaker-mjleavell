const printToDom = (stringToPrint, elementId) => {
    const selectedDiv = document.getElementById(elementId);
    selectedDiv.innerHTML = stringToPrint;
};

const getSecret = () => {
    document.getElementById('encodeBtn').addEventListener('click', (e) => {
        let inputString = encodeInput.value.split("");
        let outputArray = [];
        inputString.forEach((letter) => {
            outputArray.push(letter.charCodeAt())
        })
        printToDom(outputArray, 'encodeOutput');
    })
}

getSecret();