class Solution {
    public int maxArea(int[] height) {
        // corner case
        if(height == null || height.length <= 1) {
            return 0;
        }
        int res = 0;
        int left = 0, right = height.length - 1;
        while(left < right) {
            int container = Math.min(height[left], height[right]) * (right - left);
            res = Math.max(res, container);
            if(height[left] <= height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return res;
    }
}
