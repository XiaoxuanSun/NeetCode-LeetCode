/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// method 1: Closure
var createCounter = function(init) {
    let current = init;
    return {
        increment: function() {
            current += 1;
            return current;
        },

        reset: function() {
            current = init;
            return current;
        },
        
        decrement: function() {
            current -= 1;
            return current;
        },
    }

    // Closure with arrow function
    // return {
    //     increment: () => ++current,
    //     reset: () => (current = init),
    //     decrement: () => --current,
    // }
    
    // Closure with Separately Created Functions
    // function increment() {
    //     return ++current;
    // }

    // function reset() {
    //     current = init;
    //     return current;
    // }

    // function decrement() {
    //     return --current;
    // }
    // return {increment, reset, decrement};
};

// method 2: Class
class Counter {
    constructor(init) {
        this.init = init;
        this.current = init;
    }

    increment() {
        this.current += 1;
        return this.current;
    }

    reset() {
        this.current = this.init;
        return this.current;
    }

    decrement() {
        this.current -= 1;
        return this.current;
    }
}

function createCounter(init) {
    return new Counter(init);
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */