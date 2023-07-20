function randomArray(minium, max, length) {
    const tablica = []


    for (let i = 0; i < length; i++) {
        const number = Math.floor(Math.random() * (max - minium + 1)) + minium;
        tablica.push(number);
    }

    return tablica;
}

// --------------
function randomNumber(minim, max) {
    return Math.floor(Math.random() * (max - minim + 1)) + minim
}

// ------------

function randomSymbol(length) {

    const symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ciag = '';



    for (let i = 0; i < length; i++) {
        const randomIndeks = Math.floor(Math.random() * symbols.length);
        ciag += symbols.charAt(randomIndeks)
        // charAt metoda ktora pobiera z indeksu w paramatrze symbols ?
    }
    return ciag;


}

module.exports = { randomSymbol, randomNumber, randomArray }