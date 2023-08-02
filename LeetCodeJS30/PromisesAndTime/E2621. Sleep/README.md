# 2621. Sleep
</br>

## Constraints
- `1 <= millis <= 1000`

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中Asyncrhonous Programming，主要回顾了Promises and setTimeout

    - Promises

        A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it's a returned object to which you attach callbacks, as opposed to passing callbacks into a function.

        ```javascript
        let promise = new Promise((resolve, reject) => {
            let condition = true;

            setTimeout(() => {
                if (conditin) {
                    resolve('Promise fulfilled!');
                } else {
                    reject('Promise rejected');
                }
            }, 1000);
        });

        promise
            .then(value => {
                // This will be executed if the promise is resolved
                console.log(value);
            })
            .catch(error => {
                 // This will be executed if the promise is rejected
                console.log(error);
            })
        ```

    - setTimeout()

        Once setTimeout is called, the JavaScript runtime sets up the timer, but then immediately continues executing any following code. It does not pause or wait for the timer to finish, illustrating the non-blocking nature of JavaScript.

        <strong>
        After the specified delay (2 seconds in this case), the callback function is added to the task queue. However, it's important to note that the callback function is not necessarily executed right at this moment. The actual delay until the callback function is invoked may be slightly longer than the specified delay. This is due to the nature of the event-driven JavaScript runtime and the single-threaded event loop.
        </strong>

        Imagine if there was a long process or operation blocking the main JavaScript thread. In such a scenario, even if the timer has completed in the background, the callback function would still have to wait for the completion of the blocking task. This is because the event loop can only handle one task at a time, and it processes tasks in the order they are queued.

        Therefore, the '2 seconds' specified in setTimeout should be understood as the 'minimum delay' before the callback function is invoked, rather than a 'guaranteed delay'. If the JavaScript runtime is busy with other tasks, it could take longer than 2 seconds for the callback function to actually get executed. This behavior underscores the importance of understanding the asynchronous nature of JavaScript, as it can have significant implications for the performance and behavior of your code.

        ```javascript
        console.log("Starting the timer...");

        // setTimeout returns a Timeout object which can be used to reference the timer
        let timeoutId = setTimeout(() => {
            console.log("Timeout completed!");
        }, 2000);

        // Some condition or logic
        if (/* some condition */) {
            // Cancels the timeout
            clearTimeout(timeoutId);
        }
        ```

        This can be useful in various scenarios where you might want to cancel a delayed operation if a certain condition is met before the operation executes. For instance, if you have a function that runs after a delay to check if a user is still active on a page, but the user navigates away before the delay is up, you could use clearTimeout to cancel the check.
    
    - Event Loop

        JavaScript uses a <strong>call stack</strong> to manage the execution of functions. When a function is called, it's added to the stack. When the function completes, it's removed from the stack. JavaScript, being single-threaded, can only execute one function at a time.

        <strong>However, this could be problematic if a function takes a long time to execute (like a network request).</strong> This is where the Event Loop comes in.

        <strong>
        The Event Loop is a continuous loop that checks if the call stack is empty. If it is, it takes the first task from the task queue (also known as the event queue or the callback queue) and pushes it onto the call stack, which immediately executes it.
        </strong>

        - Asynchronous Callbacks

            setTimeout is an example of an asynchronous function in JavaScript. When the setTimeout function is called, it starts a timer and then immediately returns, allowing the JavaScript runtime to continue executing other code without waiting for the timer to complete. This is the non-blocking nature of JavaScript.

            <strong>
            Once the timer completes, the callback function given to setTimeout is added to the task queue. The Event Loop constantly checks the call stack and the task queue. When the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack to be executed.
            </strong>

        - Concurrency and the Event Loop

            Here's how JavaScript can handle concurrent operations:

            1. JavaScript runs a piece of code (this code is running on the main thread).
            2. When an async operation is encountered (like setTimeout, fetch, etc.), JavaScript sets it up and then continues running the rest of the code. It doesn't wait for the async operation to complete. This async operation might be running in the background but not on the main JavaScript thread.
            3. When the async operation completes, its callback function is placed into the task queue.
            4. Once the call stack is empty (i.e., all the code in the current turn of the Event Loop has been executed), the Event Loop takes the first task from the task queue and pushes it onto the call stack, which immediately executes it.
            5. This process continues, with the Event Loop pushing tasks from the task queue onto the call stack whenever the call stack is empty, allowing JavaScript to handle multiple operations concurrently despite being single-threaded.
            6. This is a high-level overview of how JavaScript handles asynchronous operations. It's more complex in reality, with additional features like microtasks and macrotasks, but this is the fundamental concept.

            This is a high-level overview of how JavaScript handles asynchronous operations. It's more complex in reality, with additional features like <strong>microtasks and macrotasks</strong>, but this is the fundamental concept.

    - Async / Await

        To simplify working with promises, JavaScript provides the async and await keywords, which allow you to write asynchronous code that looks and behaves more like synchronous code. The async keyword is used to declare an asynchronous function. When called, an async function returns a promise. When the async function returns a value, the promise is fulfilled with that value. If the async function throws an exception, the promise is rejected with the thrown value.

        ```javascript
        async function foo() {
            return 'Hello, World!';
        }

        foo().then(message => console.log(message)); // logs 'Hello, World!'
        ```

        The foo function is declared with the async keyword, which means it returns a promise. When foo is called, <strong>it returns a promise that is immediately fulfilled with the value 'Hello, World!'</strong>. <strong>The promise returned by an async function can be used with the .then method to schedule code to run after the promise is fulfilled, or with the await keyword to pause the execution of the async function until the promise is fulfilled.</strong> Keep in mind that even though async functions make asynchronous code look and behave more like synchronous code, they are still non-blocking. The JavaScript runtime can continue doing other work while waiting for the promise returned by an async function to be fulfilled.

        Here's a specific example of how asynchronous programming can be used for handling user interactions. Consider a web page where the user can click a button to load data from a server, perhaps a list of items to display. When the button is clicked, you don't want to freeze the entire page while waiting for the server to respond. Instead, you want to handle the request asynchronously. Here's how you might do this:

        ```javascript
        button.addEventListener('click', async() => {
            // Showing a spinner
            spinner.style.display = 'block';
            
            try {
                let response = await fetch('');
                let items = await response.json();

                displayItems(items);
            } catch (error) {
                console.log('Error: ', error);
            } finally {
                spinner.style.display = 'none';
            }
        });
        ```

        <strong>Async/await can be seen as syntax sugar on top of promises, making asynchronous code easier to write and understand. When we mark a function with the async keyword, it becomes an asynchronous function that automatically returns a promise.</strong> Within an async function, we can use the await keyword to pause the execution of the code until the promise is resolved or rejected.

        <strong>
        By employing await, we can eliminate the need for explicit .then() and .catch() chains that are typically used with promises.<strong> Instead, we can structure our code in a more linear and synchronous-looking manner. This makes it easier to reason about the flow of the program and handle errors in a more concise way.

        Example:
        ```javascript
        // .then() and .catch()
        fetchData()
            .then(response => {
                console.log('Response: ', response);
                return processData(response);
            })
            .then(result => {
                console.log('Processed data: ', result);
            })
            .catch(error => {
                console.log('Error: ', error);
            });

        // using async and await to rewrite
        async function fetchDataandProcess() {
            try {
                const response = await fetchData();
                console.log('Response: ', response);

                const result = await processData();
                console.log('Processed data: ', result);
            } catch {
                console.log('Error: ', error);
            }
        }

        fetchDataandProcess();
        ```

        Under the hood, the await keyword halts the execution of the function, allowing other tasks to continue, such as handling user input or animations. The JavaScript engine switches to executing other code until the awaited promise is settled, at which point it resumes executing the remaining code within the async function.
    
    - Promise Chaining:

        Promise chaining is a technique in JavaScript that allows you to perform multiple asynchronous operations in a sequence, with each operation starting when the previous one has completed. The primary advantage of promise chaining is that it allows you to avoid the "callback hell" or "pyramid of doom" that can result from using nested callbacks to handle asynchronous code.

        Each then in a promise chain receives the result of the previous promise's resolution. This result can be used to inform the next step in the chain. If a promise in the chain is rejected, the chain's subsequent then methods will be skipped until a catch method is found.

        - .finally

            In JavaScript, Promises offer several powerful methods for handling asynchronous actions and their results. One of these methods is .finally. The .finally method is a built-in method of a Promise that is always executed, regardless of whether the promise is fulfilled or rejected. This makes it an excellent place to put cleanup code that must be run regardless of the outcome of the promise.

            ```javascript
            let isLoading = true;

            fetch('https://api.example.com/data')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error))
            .finally(() => {
                isLoading = false;
                console.log('Fetch operation finished');
            });
            ```
        
        - return await new Promise()

            One interesting fact that might come in handy when solving this problem is that whether you return a promise with return `new Promise()` or return `await new Promise()` inside an async function, the behavior usually remains the same. This is because an async function always wraps the returned value in a promise. However, using await can make a difference in certain situations, such as error handling. (because the promise is returned before it has a chance to throw the error)

- 解题方法：1. Asynchronous Programming with Promises and setTimeout; 2. Asynchronous Programming with Promises and setTimeout without Return

## Follow up
None.