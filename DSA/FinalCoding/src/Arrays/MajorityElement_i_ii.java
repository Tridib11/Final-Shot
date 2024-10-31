package Arrays;
import java.util.*;
public class MajorityElement_i_ii {
    public static void main(String[] args) {

    }
    public int majorityElement_nby2(int[] nums) {
        int count=0;
        int majorityElement=0;
        for(int i=0;i<nums.length;i++){
            if (count==0){
                count=1;
                majorityElement=nums[i];
            }
            else if(nums[i]==majorityElement){
                count++;
            }else{
                count--;
            }
        }
        return majorityElement;
    }

    public List<Integer> majorityElement(int[] nums) {

    }
}
