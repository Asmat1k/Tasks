const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'S': ' ',
};

function decode(expr) {
    let res = [];
    let space = '**********';
    for(let i=0; i<expr.length; i+=10) {
        res.push(expr.slice(i,i+10));
    }
    for(let i=0; i<res.length; i++) {
        if(res[i]!=space)
            res[i] = res[i].slice(res[i].indexOf('1'));
    }
    res = res.map(function(letter) { 
        return letter.replaceAll('10', '.').replaceAll('11', '-').replaceAll(space,'S'); 
    });
    res = res.map(function(letter) {
        return MORSE_TABLE[letter];
    });
    res = res.join('');
    return res;
    
}

module.exports = {
    decode
}