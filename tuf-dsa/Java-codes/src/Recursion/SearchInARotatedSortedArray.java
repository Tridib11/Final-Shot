package Recursion;

public class SearchInARotatedSortedArray {
    public static void main(String[] args) {
        int[] arr={4, 5, 6, 7, 0, 1, 2};
        System.out.println(search(arr,0));
    }

    public static int search(int[] nums, int k) {
        return helper(nums,k,0,nums.length-1);

    }

    private static int helper(int[] nums,int target,int start,int end){
        if(start>end){
            return -1;
        }

        int mid=start+(end-start)/2;
        if(nums[mid]==target){
            return mid;
        }
        if(nums[start]<=nums[mid]){
            if(nums[start]<=target && target<nums[mid]){
                return helper(nums,target,start,mid-1);
            }else{
                return helper(nums,target,mid+1,end);
            }
        }else{
            if(nums[mid]<target && target<nums[end]){
                return helper(nums,target,mid+1,end);
            }else{
                return helper(nums,target,start,mid-1);
            }
        }
    }
}
