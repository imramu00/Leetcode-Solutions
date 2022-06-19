/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort((a,b)=>a.localeCompare(b)); // lexicographically sort inbuilt method
    let find = [...products];
    let ans = [];
    for(let i=0;i<searchWord.length;i++) {
        let temp = [];
        let temp2 =[];
        for(let j=0;j<find.length;j++) {
            if(find[j][i] == searchWord[i]){
                temp.push(find[j])
                if(temp2.length<3)
                    temp2.push(find[j])
            }
        }
        ans.push(temp2)
        find = [...temp]
    }
    return ans;
};