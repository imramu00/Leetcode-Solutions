/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const vowels = ["a","e","i","o","u"]
    let count = 0
    
    function generateComb(s, start){
        // base case: s length is n => increment the count
        if (s.length === n) {
            count += 1
            return
        }
        
        // going over the vowels and append the s
        // i start from start to prevent generating strings that are not lexicographically sorted
        for (let i = start; i < 5; i++){
            generateComb(s+vowels[i], i)
        }
    }
    
    generateComb('', 0)
    
    return count
};