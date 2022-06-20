/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {

  const factarial = (n) => {
    if(n>1){return n*factarial(n-1)}
    else return 1;
  };
     
  return factarial(m+n-2)/(factarial(m-1)*factarial(n-1))
     
};