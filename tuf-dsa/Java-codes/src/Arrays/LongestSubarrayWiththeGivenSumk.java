package Arrays;
import java.util.*;

public class LongestSubarrayWiththeGivenSumk {
    public static void main(String[] args) {

    }

    public int longestSubarray(int[] nums, int sum) {
        int start=0;
        int end=-1;
        int currentSum=0;
        int longest=Integer.MIN_VALUE;
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<nums.length;i++){
            currentSum+=nums[i];
            if(currentSum-sum==0){
                start=0;
                end=i;
                break;
            }
            if(map.containsKey(currentSum-sum)){
                start=map.get(currentSum-sum)+1;
                end=i;
                longest=Math.max(longest,(end-start)+1);
            }
            map.put(currentSum,i);
        }
        return longest;
    }
}
