/**
 * @param {string} val
 * @return {Object}
 */

// method 1: use function expression
var expect = function(val) {
    // return an object
    return {
        toBe: (input) => {
            if(val !== input) {
                throw new Error("Not Equal");
            }
            return true;
        },

        notToBe: (input) => {
            if(val === input) {
                throw new Error("Equal");
            }
            return true;
        },
    }
};

// method 2: use class of ES6
class Expect {
    constructor(val) {
        this.val = val;
    }
    toBe(val2) {
        if(this.val !== val2) {
            throw new Error("Not Equal");
        }
        return true;
    }

    notToBe(val2) {
        if(this.val === val2) {
            throw new Error("Equal");
        }
        return true;
    }
}

function expect(val) {
    return new Expect(val);
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */