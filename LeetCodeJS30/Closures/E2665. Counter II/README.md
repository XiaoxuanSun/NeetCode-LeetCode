# 2665. Counter II
</br>

## Constraints
- `-1000 <= n <= 1000`
- At most 1000 calls to counter() will be made

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中Closure和Objects
    1. JavaScript Objects
        - key-value mapping;

        - key: must be strings;

        - value: can be anything: strings, functions, other objects, etc.

        - There are three ways to access values on an object:

            1. Dot Notation.

            2. Bracket Notation. This is used when the key isn't valid variable name. For example ".123".

            3. Destructuring Syntax. This is most useful when accessing multiple values at once.

            ```javascript
            const { num, str} = object;
            console.log(num, str); // 1 "Hello World"
            ```

    2. Classes
        
        JavaScript implements classes with special objects call prototypes. All the methods (in this case greet) are functions stored on the object's prototype.

        ```javascript
        const alice = {
            name: "Alice",
            age: 25,
            __proto__: {
                greet: function() {
                console.log("My name is", this.name);
                }
            }
        };
        alice.greet(); // Logs: "My name is Alice"
        ```

        "How can you access the greet method even though it's not a key on the alice object"?

            The reason is that accessing keys on an object is actually slightly more complicated than just looking at the object's keys. There is actually an algorithm that traverse the prototype chain. First, JavaScript looks at the keys on the object. If the requested key wasn't found, it then looks on the keys of the prototype object. If it still wasn't found, it looks at the prototype's prototype, and so on. This is how inheritance is implemented in JavaScript!

            You might also wonder why JavaScript has this strange prototype concept at all. Why not just store the functions on the object itself? The answer is efficiency. Every time a new Person is created, age and name fields are added to the object. However only a single reference to the prototype object is added. So no matter how many instances of Person are created or how many methods are on the class, only a single prototype object is generated.
    
    3. Proxies
    ```javascript
    function checkName(name) {
        if (name === '') {
            throw "Name can't be empty!";
        }
        return name;
    }

    try {
        console.log(checkName(''));
    } catch (error) {
        console.error(error); // "Name can't be empty!"
    }
    ```
- 解题方法，两种方式
    1. Closure
    2. Classes

- Why this problem is important? (Interview Tips)
    - What does it mean when functions return objects or other functions in JavaScript?

        When a function returns an object or another function, it's making use of higher-order functions and factory functions. Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. Factory functions, on the other hand, are functions that return object instances. This concept is crucial in functional programming and provides a way to encapsulate and reuse code.

    - How does method chaining work in JavaScript, and when would it be beneficial to use?

        Method chaining is a common pattern in JavaScript where multiple methods are called in a single statement. This is possible when each method returns an object, which may be the original object (for mutable objects) or a new object (for immutable objects). Method chaining makes the code more readable and concise and is especially beneficial when performing multiple transformations or operations on an object.
    
    - What is the difference between == and === in JavaScript?

        The == operator is the abstract equality operator and will attempt to perform type coercion if the types of the two variables being compared are different. On the other hand, the === operator, known as the strict equality operator, does not perform type coercion, and it will only return true if both the value and the type of the two variables are the same.
    
    - How would you handle errors in JavaScript functions??

        Errors in JavaScript functions can be handled using try...catch...finally blocks. The try block contains the code that may potentially throw an error, the catch block is executed if an error occurs in the try block, and the finally block is executed after the try and catch blocks, regardless of the outcome. Another way to handle errors is by using error-first callbacks, which is a common pattern in Node.js where the first argument of the callback function is reserved for an error object.

    - Why would we want to throw an error instead of just returning false in the toBe and notToBe methods?

        Throwing an error provides more information about what went wrong and allows you to catch the error at a higher level in your code with a try...catch statement. In contrast, simply returning false would only inform you that the values were not equal, without giving any further context or information.

## Follow up
None.