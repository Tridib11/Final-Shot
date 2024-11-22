package Arrays;
import java.util.*;
public class Three_Sum {
    public static void main(String[] args) {

    }
    public List<List<Integer>> threeSum(int[] nums) {
        if(nums==null || nums.length<3){
            return new ArrayList<>();
        }
        Arrays.sort(nums);
        int n=nums.length;
        HashSet<List<Integer>> set=new HashSet<>();
        for(int i=0;i<n-2;i++){
            int left=i+1;
            int right=n-1;
            while(left<right){

                int sum = nums[i]+nums[left]+nums[right];
                if(sum==0){
                    set.add(Arrays.asList(nums[i],nums[left],nums[right]));
                    left++;
                    right--;
                }else if(sum<0){
                    left++;
                }else{
                    right--;
                }
            }
        }
        return new ArrayList<>(set);
    }


}
