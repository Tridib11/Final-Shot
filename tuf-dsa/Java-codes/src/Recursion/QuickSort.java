package Recursion;
import java.util.*;
public class QuickSort {
    public static void main(String[] args) {
        int[] nums = {7, 4, 1, 5, 3};
        System.out.println(Arrays.toString(quickSort(nums)));
    }
    public static int[] quickSort(int[] nums) {
        if(nums.length<=1){
            return nums;
        }

        qs(nums,0,nums.length-1);
        return nums;
    }

    private static void qs(int[] arr,int lowIndex,int highIndex){
        if(lowIndex>=highIndex){
            return;
        }
        int pivot=arr[highIndex];
        int leftPointer=lowIndex;
        int rightPointer=highIndex;
        while(leftPointer<rightPointer){
             while(arr[leftPointer]<=pivot && leftPointer<rightPointer){
                 leftPointer++;
             }
             while(arr[rightPointer]>=pivot && leftPointer<rightPointer){
                 rightPointer--;
             }
             swap(arr,leftPointer,rightPointer);
        }
        swap(arr,leftPointer,highIndex);
        qs(arr,lowIndex,leftPointer-1);
        qs(arr,leftPointer+1,highIndex);

    }

    private static void swap(int[] arr,int index1,int index2){
        int temp=arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;
    }
}
