/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(g, k, arr1=[],arr2=[],arr3=[], res=[]) {
    arr1=g.flat()
    k=k%arr1.length
    arr2=arr1.splice(-k,k)
    arr3=[...arr2, ...arr1]
    for(let q=0;q<g.length;q++){
        res.push(arr3.splice(0,g[0].length))
    }
    return res
};