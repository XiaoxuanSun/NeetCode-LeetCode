# 271. Encode and Decode Strings
</br>

## Constraints
- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` contains any possible characters out of 256 valid ASCII characters.

## 题目难点
- Encoding (and Decoding) Algorithm
    - length of string + delimiter ✅
    - Chunked Transfer Encoding
        - Encoding Algorithm：
            - Iterate over the array of chunks, i.e. strings.
            - For each chunk compute its length, and convert that length into 4-bytes string.
            - Append to encoded string : 
                - 4-bytes string with information about chunk size in bytes.
                - Chunk itself.
            - Return encoded string.
        - Decoding Algorithm：
            - Iterate over the encoded string with a pointer i initiated as 0. While i < n:
                - Read 4 bytes s[i: i + 4]. It's chunk size in bytes. Convert this 4-bytes string to integer length.
                - Move the pointer by 4 bytes i += 4.
                - Append to the decoded array string s[i: i + length].
                - Move the pointer by length bytes i += length.
            - Return decoded array of strings.

- String Operations

## Follow up
Could you write a generalized algorithm to work on any possible set of characters?

The first solution: length of string + delimiter ✅