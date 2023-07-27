# 2620. Counter
</br>

## Constraints
- `-1000 <= n <= 1000`
- At most 1000 calls to counter() will be made

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中Closure的写法和用法
    1. Closure Example

        In Javascript, you can declare functions within other functions and return them. The inner function has access to any variables declared above it.

        ```javascript
        function createAdder(a) {
            return function add(b) {
                const sum = a + b;
                return sum;
            }
        }
        const addTo2 = createAdder(2);
        addTo2(5); // 7
        ```
    
    2. Closures vs Classes

        You may notice that in the above example createAdder is very similar to a class constructor.

        ```javascript
        class Adder {
            constructor(a) {
                this.a = a;
            }

            add(b) {
                const sum = this.a + b;
                return sum;
            }
        }
        const addTo2 = new Adder(2);
        addTo2.add(5); // 7
        ```

        Besides differences in syntax, both code examples essentially serve the same purpose. They both allow you to pass in some state in a "constructor" and have "methods" that access this state.

        One key difference is that closures allow for <strong>true encapsulation</strong>. In the class example, there is nothing stopping you from writing addTo2.a = 3; and breaking it's expected behavior. However, in the closure example, it is theoretically impossible to access a. Note that as of 2022, true encapsulation is achievable in classes with <strong># prefix syntax</strong>.

        Another difference is how the functions are stored in memory. If you create many instances of a class, each instance stores <strong>a single reference</strong> to the prototype object where all the methods are stored. Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. For this reason, <strong>classes can be more efficient, particularly in the case where there are many methods</strong>.

- Why this problem is important? (When, Where, What, and How to use closure)
- https://leetcode.com/problems/counter/solutions/3491300/day2-o-1-understanding-closure-in-easy-way-and-its-practical-uses/?envType=study-plan-v2&envId=30-days-of-javascript
    - What is Closure ?

    A closure is a function that has access to variables from its outer (enclosing) lexical scope, even after that outer function has returned.

    <strong>In simple terms a closure can "remember" values from its outer function's scope and use them later, even if the outer function has returned and those values would normally be out of scope.</strong>

    - When to use closure concept ?

        From definition you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used for retrival of dead values which have become out of scope. also we can comprehend that it can used for privating some varibles or function.

        Thus closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.

    - Where and How to use closure concept ?

        1. Private variables and functions:

        ```javascript
        const makeCounter = () => {
            let count = 0;
            
            return () => {
                count++;
                console.log(count);
            }
        }

        let counter = makeCounter();
        counter(); // logs 1
        counter(); // logs 2
        counter(); // logs 3
        ```

        2. For preserving states in asynchronous code:

        ```javascript
        const animate = (element, from, to, duration) => {
            let start = performance.now();
            
            const update = () => {
                let time = performance.now() - start;
                let progress = time / duration;
                let value = from + (to - from) * progress;
                
                element.style.left = value + 'px';
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            requestAnimationFrame(update);
        }

        let element = document.getElementById('my-element');
        animate(element, 0, 100, 1000);
        ```

## Follow up
None.