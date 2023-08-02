# 2634. Filter Elements from Array
</br>

## Constraints
- `0 <= arr.length <= 1000`
- `-109 <= arr[i] <= 109`

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中callbacks，以及了解Array.filter() method

- 顺便复习了Truthy and Falsy，以及Logical Operators

    - All values are considered truthy except the following:
        
        1. false
        2. All forms of zero, meaning 0, -0 (output of 0/-1), and 0n (output of BigInt(0))
        3. NaN ("Not a Number", one way to get it is with 0/0)
        4. "" (empty string)
        5. null
        6. undefined
    
    - The OR operator || returns the first value if the first value is truthy (without evaluating the 2nd value). Otherwise it returns the second value.
    
    - The AND operator && returns the first value if the first value is falsy (without evaluating the 2nd value). Otherwise it returns the 2nd value.

    - The Nullish Coalescing operator ?? is identical to || except it only treats null and undefined as falsy.

        - Examples: 

        ```javascript
        let val;
        if (a) {
            val = a;
        } else if (b) {
            val = b;
        } else {
            val = c;
        }

        const val = a || b || c;
        ```

        ```javascript
        if (a && b) {
            func();
        }

        a && b && func();
        ```

## Follow up
None.