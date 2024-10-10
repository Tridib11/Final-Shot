package Arrays;

public class RotatedSortedArray {
    public static void main(String[] args) {
        int[] arr={3,4,5,1,2};
        System.out.println(check(arr));
    }
    public static boolean check(int[] nums) {
        int count=0;
        int length=nums.length;
        for(int i=0;i<nums.length;i++){
            if(nums[i]>nums[(i+1)%length]){
                count++;
            }
        }
        return count>1?false:true;
    }



}
