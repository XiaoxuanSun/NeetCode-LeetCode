# 11. Container With Most Water
</br>

## Constraints
- `n == height.length`
- `2 <= n <= 105`
- `0 <= height[i] <= 104`

## 题目难点
- Two Pointers
- Math
    - container = Math.min(height[left], height[right]) * (right - left);
    - res = Math.max(res, container);

## Follow up
None.