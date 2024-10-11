package Arrays;

import java.util.ArrayList;

public class RotateArray {
    public static void main(String[] args) {
        int [] arr={1,2,3,4,5,6,7};
       rotate(arr,3);

    }
    public static void rotate(int[] nums, int k) {

        reverse(nums,0,k);
        reverse(nums,k+1,nums.length-1);
        reverse(nums,0,nums.length-1);
        for(int i:nums){
            System.out.println(i);
        }

    }


    private static void reverse(int[] arr,int start,int end){
        while(start<=end){
            int temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }

}
