package Arrays;



class SmallestDivisorinTheTrshold {
    public int smallestDivisor(int[] nums, int limit) {
        int n = nums.length;
        if (n > limit)
            return -1;

        int maxValue = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            maxValue = Math.max(maxValue, nums[i]);
        }

        int start = 1, end = maxValue;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (sumAndDivide(nums, mid) <= limit) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    private int sumAndDivide(int[] nums, int value) {
        int n = nums.length;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += Math.ceil((double) nums[i] / (double) value);
        }
        return sum;
    }
}
