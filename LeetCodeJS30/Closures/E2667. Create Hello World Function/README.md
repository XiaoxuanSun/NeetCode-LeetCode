# 2667. Create Hello World Function
</br>

## Constraints
- `0 <= args.length <= 10`

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中function的写法Syntax
    1. Basic Syntax
    2. Anonymous Function (Function Expression)
    3. Immediately Invoked Function Expression (IIFE)
    4. Functions Within Functions
    5. Function Hoisting
    6. Closures
    7. Arrow Syntax
        - 7.1 Basic Syntax
        - 7.2 Omit Return
        - 7.3 Differences
    8. Rest Arguments
        - 8.1 Basic Syntax
        - 8.2 Why using Rest Arguments
- Why this problem is important?
- https://leetcode.com/problems/create-hello-world-function/solutions/3487523/why-this-problem-is-important/?envType=study-plan-v2&envId=30-days-of-javascript
    - What is Closure?

        A closure is a function that has access to variables from its outer (enclosing) lexical scope, even after that outer function has returned.

        Now the thing is, why it's show important. With the help of this we can create private variable in javascript.

    - List of common uses of Closure: 

        1. Private variables and methods in object-oriented programming.

        2. Function factories that create functions with specific behavior depending on a parameter.

        3. Memoization, caching the result of an expensive function call to avoid recomputation.

        4. Event listeners and callbacks that need to access variables in the enclosing scope.

        5. Partial application and currying, creating a new function by fixing some of its arguments.

        6. Iteration over an array using forEach, map, filter, or reduce functions, which all take a function as an argument and can make use of closures to access variables in the outer scope.

        7. Emulating block scope in JavaScript before the introduction of the let and const keywords in ES6.

        8. Promises and asynchronous programming, using closures to capture variables that need to be accessed in a callback function.

        9. Managing state in Redux, a popular library for managing application state in React applications.

        10. Creating reusable utility functions that can be used in different parts of a codebase and require access to variables in the enclosing scope.

    - When, Where and How to use the arrow function syntax

        1. `this`:

            Arrow function has lexical this binding i.e they inherit the this value of the enclosing scope. This can be particularly useful when working with <strong>event listeners or callback functions</strong>, where the this value can be unpredictable.

            ```javascript
            const button = document.querySelector('button');
            button.addEventListener('click', () => {
                console.log(this); // logs the window object, not the button
            });
            ```
        2. When not to use the Arrow function syntax:

            - Arrow functions cannot be used as constructors to create new objects, because they do not have their own this value. If you need to create objects using the new keyword, you will need to use a traditional function instead.

            - Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time. If you need to use the yield keyword, you will need to use a traditional function instead.

                - You must be thinking what is this yield keyword? well, The yield keyword is used in special functions called generator functions, which can return multiple values over time instead of returning just one value like a normal function. When the yield keyword is encountered in the generator function, it pauses the function and returns a value, and the function can be resumed later to return more values.
                
                - Basically its like a pause and resume functionality.

## Follow up
None.