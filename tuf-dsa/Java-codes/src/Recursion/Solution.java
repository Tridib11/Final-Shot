package Recursion;
import java.util.*;
public class Solution {
    public int reversePairs(int[] nums) {
        int length = nums.length;
        if (length < 2) {
            return 0;
        }

        return (int) numberOfReversePairs(nums);
    }

    public long numberOfReversePairs(int[] nums) {
        int length = nums.length;
        if (length < 2) {
            return 0;
        }

        int midIndex = length / 2;
        int[] leftHalf = Arrays.copyOfRange(nums, 0, midIndex);
        int[] rightHalf = Arrays.copyOfRange(nums, midIndex, length);

        // Recursively count reverse pairs in left and right halves
        long leftPairs = numberOfReversePairs(leftHalf);
        long rightPairs = numberOfReversePairs(rightHalf);

        // Count reverse pairs between the two halves during merge
        long mergePairs = mergeAndCount(nums, leftHalf, rightHalf);

        // Return the total count of reverse pairs
        return leftPairs + rightPairs + mergePairs;
    }

    private long mergeAndCount(int[] nums, int[] leftHalf, int[] rightHalf) {
        int leftSize = leftHalf.length;
        int rightSize = rightHalf.length;

        // Counting reverse pairs
        long count = 0;
        int j = 0; // Pointer for rightHalf
        for (int i = 0; i < leftSize; i++) {
            // Count reverse pairs where leftHalf[i] > 2 * rightHalf[j]
            while (j < rightSize && leftHalf[i] > 2L * rightHalf[j]) {
                j++;
            }
            count += j; // Add the number of valid pairs
        }

        // Merging the two halves into nums
        int i = 0, k = 0;
        j = 0;

        // Merge process
        while (i < leftSize && j < rightSize) {
            if (leftHalf[i] <= rightHalf[j]) {
                nums[k++] = leftHalf[i++];
            } else {
                nums[k++] = rightHalf[j++];
            }
        }

        // Copy remaining elements from leftHalf
        while (i < leftSize) {
            nums[k++] = leftHalf[i++];
        }

        // Copy remaining elements from rightHalf
        while (j < rightSize) {
            nums[k++] = rightHalf[j++];
        }

        return count; // Return the count of reverse pairs
    }

    public static void main(String[] args) {
        int[] nums = {6, 4, 1, 2, 7};

        // Create an instance of Solution class
        Solution sol = new Solution();

        // Count the reverse pairs in the array
        int count = sol.reversePairs(nums);

        // Print the count of reverse pairs
        System.out.println("The number of reverse pairs is: " + count);
    }
}
