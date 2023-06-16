class Solution {
    // Three Times Loop
    public int[] productExceptSelf(int[] nums) {
        // corner case
        if(nums == null || nums.length <= 1) {
            return nums;
        }
        int n = nums.length;
        int[] leftPrefixProduct = new int[n];
        leftPrefixProduct[0] = 1;
        for(int i = 1; i < n; i++) {
            leftPrefixProduct[i] = leftPrefixProduct[i-1] * nums[i-1];
        }

        int[] rightPrefixProduct = new int[n];
        rightPrefixProduct[n-1] = 1;
        for(int i = n-2; i >= 0; i--) {
            rightPrefixProduct[i] = rightPrefixProduct[i+1] * nums[i+1];
        }

        int[] res = new int[n];
        for(int i = 0; i < n; i++) {
            res[i] = leftPrefixProduct[i] * rightPrefixProduct[i];
        }
        return res;
    }

    // follow-up: O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
    public int[] productExceptSelf(int[] nums) {
        // corner case
        if(nums == null || nums.length <= 1) {
            return nums;
        }
        int n = nums.length;
        int[] res = new int[n];
        res[0] = 1;
        for(int i = 1; i < n; i++) {
            res[i] = res[i-1] * nums[i-1];
        }

        int right = 1;
        for(int i = n - 1; i >= 0; i--) {
            res[i] *= right;
            right *= nums[i]; 
        }
        return res;
    }
}