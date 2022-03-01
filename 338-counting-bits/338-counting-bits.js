/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(num) {
    let res = [0]
    for(let i=1;i<=num;i++){
        const half = i>>1
        const odd = i&1
        res[i] = res[half] + odd
    }
    return res
};