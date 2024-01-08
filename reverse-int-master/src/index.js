module.exports = function reverse (n) {
    if(n>0)
        return n.toString().split('').reverse().join('');
    else 
        return (n*(-1)).toString().split('').reverse().join('');
}
