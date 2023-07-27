/**
 * @param {Object | Array} obj
 * @return {boolean}
 */

// method 1: using String.stingify()
var isEmpty = function(obj) {
    if(JSON.stringify(obj).length <= 2) {
        return true;
    }
    return false;
};

// method 2: using Object.keys()
var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

// method 3: using for-loop
var isEmpty = function(obj) {
    for(let i in obj) {
        return false;
    }
    return true;
};