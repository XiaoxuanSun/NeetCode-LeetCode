# 2626. Array Reduce Transformation
</br>

## Constraints
- `0 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`
- `0 <= init <= 1000`

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中callbacks，以及了解Array.reduce() method
    
    - Use cases of Reduce:

        Reduce iterates over each value in an array and merges each value into an accumulator variable in some way. The first argument is a callback that takes in the current accumulator value and each array element and returns a new accumulator value. The 2nd argument is the value the accumulator is initialized as. The final value of accumulator after looping over the entire array is returned.

        1. Sum Values in Array (The classic use-case of reduce is summing up all the values in an array.)

        ```javascript
        const nums = [1, 2, 3];
        const sum = nums.reduce((accumulator, val) => accumulator + val, 0);
        console.log(sum); // 6
        ```

        ```javascript
        const nums = [{x: 1}, {x: 2}, {x: 3}];
        const sum = nums.reduce((accumulator, val) => accumulator + val.x, 0);
        console.log(sum); // 6
        ```

        2. Index Array by Key

            An extremely common task in programming is taking a list of data and indexing each piece of data by some key. That way, the data is accessible by it's key in O(1)O(1)O(1) time.
        
        ```javascript
        const groceries = [
            { id: 173, name: "Soup" }, 
            { id: 964, name: "Apple" },
            { id: 535, name: "Cheese" }
        ];

        const indexedGroceries = groceries.reduce((accumulator, val) => {
            accumulator[val.id] = val;
            return accumulator;
        }, {});

        console.log(indexedGroceries);
        /**
        * {
        *   "173": { id: 173, name: "Soup" },
        *   "964": { id: 964, name: "Apple" },
        *   "535": { id: 535, name: "Cheese" },
        * }
        */
        ```

            Note that a common performance mistake that developers make is to create a clone of the accumulator for each array iteration. i.e. return { ...accumulator, [val.id]: val };. This results in an O(n^2) algorithm.

        3. Combine Filter and Map

            It is not uncommon to need to chain .filter().map() together to both remove elements from an array and transform it. The problem is this approach is less efficient because these array methods create new arrays. Two arrays are created when only one is necessary. You can combine the filter and the map into a single reduce for improved performance.

            ```javascript
            const groceries = [
                { id: 173, name: "Soup" }, 
                { id: 964, name: "Apple" },
                { id: 535, name: "Cheese" }
            ];

            /** With filter and map */
            var names = groceries
                .filter(item => item.id > 500)
                .map(item => item.name)

            /** With reduce */
            var names = groceries.reduce((accumulator, val) => {
                if (val.id > 500) {
                    accumulator.push(val.name);
                }
                return accumulator;
            }, []);

            console.log(names); // ["Apple", "Cheese"]
            ```

## Follow up
None.