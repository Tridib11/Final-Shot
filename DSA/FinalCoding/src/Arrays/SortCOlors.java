package Arrays;

public class SortCOlors {
    public static void main(String[] args) {

    }

    public void sortColors(int[] nums) {
        int n = nums.length - 1;
        int i = 0;
        int j = 0;
        int k = n;

        while (j <= k) {
            if (nums[j] == 1) {
                j++;
            } else if (nums[j] == 2) {
                swap(nums, j, k);
                k--;
            } else {
                swap(nums, j, i);
                j++;
                i++;
            }
        }
    }

    private void swap(int[] arr, int start, int end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
}
