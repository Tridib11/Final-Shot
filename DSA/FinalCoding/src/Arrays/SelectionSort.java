package Arrays;

import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {2, 4, 1, 6, 70};
        System.out.println(Arrays.toString(selectionSort(arr, arr.length)));
    }

    public static int[] selectionSort(int arr[], int n) {
        for (int i = 0; i < n; i++) {
            int lastIndex = n - i - 1;
            int maxIndex = getMaxIndex(arr, 0, lastIndex);
            swap(arr, maxIndex, lastIndex);
        }
        return arr;
    }

    static void swap(int[] arr, int start, int end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }

    static int getMaxIndex(int[] arr, int start, int end) {
        int maxIndex = start;  // Start with the first index in the range
        for (int i = start ; i <= end; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;  // Update maxIndex to the index of the larger element
            }
        }
        return maxIndex;
    }
}
