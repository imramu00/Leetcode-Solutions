/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    this.map={};
    for(let i=0;i<words.length;i++){
        let w = words[i];
        for(let j=0;j<w.length;j++){
            let prefix = w.substring(0,j+1);
            for(let k=0;k<w.length;k++){
                let suffix = w.substring(k);
                this.map[prefix+"_"+suffix]=i;
            }
        }
    }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function(prefix, suffix) {
    let key  = prefix+"_"+ suffix;
    if(this.map[key]!==undefined){
        return this.map[key];
    }
    return -1;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */