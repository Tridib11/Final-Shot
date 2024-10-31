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
        int count1=0,count2=0;
        int element1=Integer.MIN_VALUE;
        int element2=Integer.MIN_VALUE;

        for(int i=0;i<nums.length;i++){
            if(count1==0 && nums[i]!=element2){
                count1=1;
                element1=nums[i];
            }else if(count2==0 && nums[i]!=element1){
                count2=1;
                element2=nums[i];
            } else if (nums[i]==element1) {
                count1++;
            }else if(nums[i]==element2){
                count2++;
            }else{
                count1--;count2--;
            }
        }
        List<Integer> ans=new ArrayList<>();
        count1=0;count2=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==element1) count1++;
            if(nums[i]==element2) count2++;
        }

        int mini=(int) ((nums.length)/3)+1;
        if(count1>=mini) ans.add(element1);
        if(count2>=mini) ans.add(element2);


        return ans;

    }
}
