# 2723. Add Two Promises
</br>

## Constraints
- promise1 and promise2 are promises that resolve with a number

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中Promises and async/await

    - Promises

        In Javascript promises represent the eventual completion (or failure) of an asynchronous operation and allow us to work with the results when they become available. 

        1. Pending: The initial state of a promise. It represents that the asynchronous operation is still ongoing and hasn't completed yet.
        2. Fulfilled: The state of a promise when the asynchronous operation is successfully completed. It means that the promised result or value is available.
        3. Rejected: The state of a promise when the asynchronous operation encounters an error or fails. It means that the promised result cannot be obtained.
        
        Promises provide methods like .then() and .catch() to handle the resolved values or errors.

    - Async / Await

        The async and await keywords are used to simplify working with promises and make asynchronous code appear more like synchronous code.

        1. `async`: async is used to define an asynchronous function. <strong>It ensures that the function always returns a promise.</strong> When the async keyword is used before a function declaration or function expression, it becomes an asynchronous function.

        (Note: Non-promises returned from async functions are automatically wrapped in promises.)

        2. `await`: await is used to pause the execution of an asynchronous function until a promise is resolved. It can only be used inside an async function. When await is used before a promise, it waits for the promise to be resolved or rejected. If resolved it proceeds to the next line of code and if the awaited promise is rejected, an exception is thrown.

        Using await within an async function allows you to write asynchronous code in a more sequential and readable manner, without the need for explicit promise chaining using .then().

    - 扩展延伸：Promise.all():

        The Promise.all() method is used to handle multiple promises concurrently. It takes an array (or an iterable) of promises as input and returns a new promise that resolves when all the promises in the input array have resolved.

        (Note: Promise.all() not necessarily only takes promises as input, it can also take just array of numbers and it'll resolve it - for example:
        
            ```javascript
            await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
                console.log(value)
            }, (error) => {
                console.log(error)
            })
            ```
        )

        The Promise.all() method waits for all the promises to settle (either fulfilled or rejected).
        <strong>
        If all the promises are fulfilled, the returned promise is fulfilled, and the resolved values of the input promises are available as an array in the same order as the input promises.
        
        If any of the promises are rejected, the returned promise is rejected with the reason of the first rejected promise.
        </strong>

- 解题方法：1. Using Promise.all(); 2. Using only await; 3. Using Promise.then()

- Why this problem is important? (Interview Tips)

    1. What is the purpose of the Promise.all() method?

        The Promise.all() method is used to handle multiple promises concurrently. <strong>It takes an array of promises as input and returns a new promise.</strong> This new promise resolves when all the promises in the input array have resolved. The resolved values of the promises are available in the .then() block as an array in the same order as the input promises.

    2. How do you handle errors in promises?

        Errors in promises can be handled by using `try{} catch(err){} finally` block to the promise chain.

    3. What is the difference between synchronous and asynchronous operations?

        Synchronous operations block the execution of the program until the operation is complete. They are executed one after the other in a sequential manner. Asynchronous operations, on the other hand, do not block the execution of the program. They allow the program to continue executing other tasks while waiting for the operation to complete. Asynchronous operations are typically used for tasks that may take longer to complete, such as network requests or file operations, to avoid blocking the main execution thread.

    4. What are the differences between callbacks and promises in JavaScript? When would you prefer using promises over callbacks? Also what is callback hell and how to alleviate it?

        Callbacks are a traditional way to handle asynchronous operations in JavaScript. They are functions passed as arguments to other functions and get invoked once the asynchronous operation completes.

        Promises, on the other hand, are objects that represent the eventual completion (or failure) of an asynchronous operation. Promises provide more structured and readable code compared to callbacks. In general promises are generally preferred over callbacks when dealing with complex asynchronous operations, error handling, and code readability.

        In callback hell, the code structure becomes deeply nested, with each callback being passed as an argument to another callback. This nesting can quickly become complex and make the code hard to follow, leading to issues such as code duplication, error handling problems, and difficulties in maintaining and debugging the code. To alleviate callback hell, several approaches can be used, such as using named functions, utilizing control flow libraries (e.g., async.js or Promises), or utilizing modern JavaScript features like async/await. These approaches help flatten the code structure and make it more readable and maintainable by avoiding excessive nesting of callbacks.

    5. Explain the purpose of the .catch() method in promises. How does it differ from the .then() method?

        The .catch() method in promises is used for error handling. It allows you to specify a callback function that will be invoked when a promise is rejected or encounters an error during its execution while on the other side .then() is used to handle fulfilled promises and successful outcomes.

    6. What is the difference between Promise.resolve() and Promise.reject()?

        Promise.resolve(): It returns a promise that is resolved with a given value. If the provided value is already a promise, it is returned as is. If the value is not a promise, Promise.resolve() creates a new promise that is immediately resolved with the provided value. 

        Promise.reject(): It returns a promise that is rejected with a given reason or error. The provided reason or error is treated as the rejection reason for the promise.

## Follow up
None.