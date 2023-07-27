# 2704. To Be Or Not To Be
</br>

## Constraints
None.

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中Method Chaining写法，以及Error Handling
    1. JavaScript Objects and Function Returns
        - In JavaScript, functions can return objects, which are collections of related data and functions, often known as properties and methods.
    2. JavaScript Objects and Limited Method Chaining
        - Full method chaining:
        ```javascript
        let arr = [5, 2, 8, 1];
        let result = arr.sort().reverse().join("-");
        
        console.log(result); // "8-5-2-1"
        ```
        - 本题中，因为`toBe`和`notToBe`方法不return原来的object，而是return true或throw an error，所以是limited method chaining。
        - Method Chaining实现依靠function return an object, containing methods
    3. JavaScript Error Handling
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
    1. Function Expression
    2. Using ES6 Classes

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