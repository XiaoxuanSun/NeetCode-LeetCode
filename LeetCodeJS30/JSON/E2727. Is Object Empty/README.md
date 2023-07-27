# 2727. Is Object Empty
</br>

## Constraints
- `2 <= JSON.stringify(obj).length <= 105`

## 题目难度
Easy

## 题目难点
- 本题重点是重新回顾JS中JSON，以及如何知道Objects的length

    JSON (JavaScript Object Notation) is a popular data-interchange format that serves as a lightweight alternative to XML. It is widely used for transmitting and storing data in a structured format.
    
    JSON consists of two main data structures: objects and arrays. The data is represented as a combination of key-value pairs, enclosed in curly braces {} for objects, and square brackets [] for arrays. The keys in an object must be strings, while the values can be any valid JSON data type, including objects and arrays.

    Example of a JSON Object:
    ```javascript
    {
        "name": "Pavitr Prabhakar",
        "age": 17,
        "city": "Mumbattan"
    }
    ```

    Example of a JSON Array:
    ```javascript
    [
        "Peter",
        "Gwen",
        "Miles"
    ]
    ```

    JSON.parse() - JSON string to Object:

    JSON.parse() is a built-in JavaScript function that converts a JSON string into a JavaScript object, arrayor a primitive value (such as a string, number, boolean, or null). It takes a valid JSON string as input and returns a corresponding JavaScript object, array or primitive value. This allows developers to work with JSON data in a native JavaScript format.

    JSON.stringify() - Object to JSON string:

    注意，JSON.stringify()会把包裹内容的括号{} / []也算进去string长度，所以，If the array or object is empty, it returns a string with opening and closing braces or curly braces.

- How to find length or size (of Array / String / Objects)?

    In JavaScript, the length or size property is used to determine the number of elements in an array or the number of key-value pairs in an object. 
    
    For arrays, the length property returns the highest numeric index plus one. 
    
    For strings, the length property returns the total length of all characters in the string.

    For objects, the length property is not available, so we need to use other methods like Object.keys() to get the number of key-value pairs.


- 解题方法，三种方式
    1. Using JSON.stringify
    2. Using Object.keys
    3. Using loop

- Why this problem is important? (Interview Tips)
    - What is the difference between an empty object and an object with no properties?

        An empty object refers to an object that does not have any key-value pairs. It means that the object does not contain any properties. On the other hand, an object with no properties still exists and may have properties in the future. It simply means that it currently does not have any properties defined.

    - How can you check if an object is empty in JavaScript without using the length of its keys?

        Another way to check if an object is empty without using the length of its keys is by using the Object.keys() method. This method returns an array of the object's own enumerable property names (keys). You can then check if the length of the array is zero to determine if the object is empty.
    
    - What is a Plain Old JavaScript Object (POJO)?

        A Plain Old JavaScript Object (POJO) is a term used to describe a simple JavaScript object that is created using the object literal syntax or the Object() constructor. It refers to an object that does not have any specialized behavior or methods inherited from custom prototypes or built-in JavaScript classes. POJOs are often used as data transfer objects (DTOs) or as simple containers for storing and accessing data.

## Follow up
None.