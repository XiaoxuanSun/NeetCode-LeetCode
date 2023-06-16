# 238. Product of Array Except Self
</br>

## Constraints
- `2 <= nums.length <= 105`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

## 题目难点
- Prefix Product!
    - left prefix product array
    - right prefix product array
    - res array = left prefix product array * right prefix product array

## Follow up
Can you solve the problem in `O(1)` extra space complexity? (The output array does not count as extra space for space complexity analysis.)

- res array
    - res array = left prefix product array
    - res array *= right prefix product