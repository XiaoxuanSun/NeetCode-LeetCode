/**
 * @param {Function[]} functions
 * @return {Function}
 */

// method 1: iteration
// var compose = function(functions) {
// 	return function(x) {
//         if (functions.length === 0) {
//             return x;
//         }
//         let input = x;
//         for (let i = functions.length - 1; i >= 0; i--) {
//             // let curr = functions[i];
//             // input = curr(input);
//             input = functions[i].call(this, input);
//         }
//         return input;
//     }
// };

// method 2: Array.reduceRight()
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight(function(acc, fn) {
            return fn(acc);
        }, x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */