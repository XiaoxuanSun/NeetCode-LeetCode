# 2635. Apply Transform Over Each Element in Array
</br>

## Constraints
- `0 <= arr.length <= 1000`
- `-109 <= arr[i] <= 109`
- fn returns a number

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中callbacks，以及了解Array.map() method
    
    A callback is defined as a function passed as an argument to another function. 

    1. Why use Callbacks

        The simple answer is they allow you to write code that can be reused across different use-cases.

- 解题方法：都是同一个思路，但是注意如何优化(加快)速度

    1. Write Values onto Initially Empty Array:

    ```javascript
    var map = function(arr, fn) {
        const newArr = [];
        for (let i = 0; i < arr.length; ++i) {
            newArr[i] = fn(arr[i], i);
        }
        return newArr;
    };
    ```

    2. Push Values onto Array: 

        JavaScript arrays are confusingly named because traditionally arrays have a fixed sized. However in JavaScript arrays can have elements appended with an average O(1)O(1)O(1) time. You can build up a transformed array by appending each element to the end one-by-one.

    ```javascript
    var map = function(arr, fn) {
        const newArr = [];
        for (let i = 0; i < arr.length; ++i) {
            newArr.push(fn(arr[i], i));
        }
        return newArr;
    };
    ```

    3. Preallocate Memory:

        This technique is more performant than appending elements to the end of the array. This is because whenever you push a value to an array, the array may not have enough memory allocated to it and it will need to be resized. This is an expensive operation. Initializing the memory upfront can result in much better performance.

    ```javascript
    var map = function(arr, fn) {
        const newArr = new Array(arr.length);
        for (let i = 0; i < arr.length; ++i) {
            newArr[i] = fn(arr[i], i);
        }
        return newArr;
    };
    ```

    4. Others

        - 32 Bit Integer Array (JavaScript typed arrays). These aren't like normal JavaScript arrays because they only allow specific data types and their size cannot be altered.

        ```javascript
        const newArr = new Int32Array(arr.length);
        ```

        - For...in Loop:

            For...in loops are more commonly used to iterate over the keys on an object. However, they can also be used to iterate over the indices of an array. This approach is notable because it respects sparse arrays. For example, if you wrote let arr = Array(100); arr[1] = 10;, this approach would only transform the single element.

            An interesting thing to note is that this is the most similar to how the built-in Array.map works. Because Array.map needs to handle sparse arrays, it is usually several times slower than an optimal custom implementation that assumes arrays aren't sparse.

        ```javascript
        var map = function(arr, fn) {
            const newArr = new Array(arr.length);
            for (const i in arr) {
                newArr[i] = fn(arr[i], Number(i));
            }
            return newArr;
        };
        ```

## Follow up
None.