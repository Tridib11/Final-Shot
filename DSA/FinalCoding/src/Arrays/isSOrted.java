package Arrays;

public class isSOrted {

    public boolean check(int[] nums) {
        int count=0;
        int length=nums.length;
        for(int i=0;i<nums.length;i++){
            if(nums[i]>nums[(i+1)%length]){
                count++;
            }
        }
        if(count>1){
            return false;
        }
        return true;
    }
}
