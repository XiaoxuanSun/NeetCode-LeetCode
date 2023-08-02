# 2666. Allow One Function Call
</br>

## Constraints
- `1 <= calls.length <= 10`
- `1 <= calls[i].length <= 100`
- `2 <= JSON.stringify(calls).length <= 1000`

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中Higher Order Function，同时回顾了Rest Syntax和Argument Syntax

    In JavaScript, a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. This concept is based on functional programming, which treats functions as first-class citizens. Higher-order functions enable powerful and flexible programming paradigms like function composition, currying, and more.

    Examples: map(), filter(), reduce(), forEach(), setTimeOut, Functions that return functions: Functions can return other functions, allowing for currying and function composition.

    - Argument Syntax基本已经被Rest Parameter取代了。One reason for this is that it can lead to confusion when you don't document the input values upfront. This is especially problematic if you want to annotate your functions with TypeScript.

- Example Use-cases of Functions That Modify Functions

    1. Throttle

        Imagine you were implementing a search field. Querying the database for results every single time a character is typed could put unnecessary load on the database and the user interface. To prevent this, you could employ a technique known as throttling. By throttling the function responsible for sending requests to the database, we ensure that only a limited number of requests are sent per second, thereby optimizing system performance.

    2. Memoize

        A common optimization is to never call a pure function with the same inputs twice. Instead you can avoid the computation by just returning the previously cached result. This is also an important concept in dynamic programming. Benefitting from this optimization could be as simple calling memoize() on the function. memoizee is popular package for this.

    3. Time Limit

        Suppose you have a long running process that repeats itself (like syncing data from a database to an in-memory cache). If for some reason, an asynchronous function never returns a value (or takes a very long time), that process will become frozen. To guarantee that never happens, you could wrap the asynchronous functions used with time limits.

- 本题扩展应用

    1. In this example, you may only want to do the expensive operation of loading the file AFTER getValue is called. For example, getValue might be part of a library and may never be called.

    2. Another example of a common use-case is showing a welcome message or introduction when a user first clicks a button.

    ```javascript
    const button = document.querySelector('#start-button');
    button.addEventListener('click', once(function() {
        displayWelcomeMessage();
    }));
    ```

- 解题方法：1. Using rest syntax; 2. Bind function to a context

    - Rest Syntax

        In JavaScript, you can access all passed arguments as an array using rest syntax. You can then spread the array of arguments and pass them back into a function.

        ```javascript
        function sum(...nums) {
            let sum = 0;
            for (const num of nums) {
                sum += num;
            }
            return sum;
        }
        sum(1, 2, 3); // 6
        ```

        In the above example, the variable nums is [1, 2, 3].

        But more importantly, you can use this syntax to transform arbitrary functions.

        ```javascript
        function withLogging(fn) {
            return function(...args) {
                console.log('Arguments', args);
                const result = fn(...args);
                console.log('Result', result);
                return result;
            }
        }
        const add = withLogging((a, b) => a + b);
        add(1, 2); // Logs: Arguments [1, 2] Result 3
        ```

        If you use function syntax (not arrow function), you have access to the arguments variable. `arguments` is a special iterable value bound to the function. (however is has been largely replaced with rest syntax)

    - Bind & apply
    
        JavaScript functions are sometimes bound to a this context. The most technically correct way to implement a higher-order function is to ensure the provided function is bound to the same context as the returned function.

        The following code showcases how functions can behave differently depending on which this context they are bound to.

        ```javascript
        const context = { Name: 'Alice' };

        function getName() {
            return this.Name;
        }
        const boundGetName = getName.bind(context);

        getName(); // undefined
        getName.apply(context, []); // "Alice"
        ```

        In the above example getName is NOT bound to context so it returns undefined. However you can use the Function.apply method to call getName() AND set this to be context. 

    


## Follow up
None.