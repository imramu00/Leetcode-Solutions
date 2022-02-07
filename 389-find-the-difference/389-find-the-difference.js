/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let x = 0
  
    for (const char of s) {
        x ^= char.charCodeAt()
    }
    
    for (const char of t) {
        x^= char.charCodeAt()
    }
    
    return String.fromCharCode(x)
};