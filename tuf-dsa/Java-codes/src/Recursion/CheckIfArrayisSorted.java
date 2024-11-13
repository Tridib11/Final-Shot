package Recursion;

public class CheckIfArrayisSorted {
    public boolean arraySortedOrNot(int[] arr) {
        return helper(arr,0);
    }

    public boolean helper(int[] nums,int index){
        if(index==nums.length-1){
            return true;
        }

        return nums[index]<=nums[index+1] && helper(nums,index+1);
    }
}




