package Arrays;
import java.util.*;
import java.util.HashMap;

public class SubArraySum {
    public static void main(String[] args) {

    }

    public int subarraySum(int[] nums,int k){
        int count=0,prefixSum=0;
        Map<Integer,Integer> map=new HashMap<>();

        map.put(0,1);
        for(int i=0;i<nums.length;i++){
            prefixSum+=nums[i];
            int remainingDigit=prefixSum-k;
            count+=map.getOrDefault(remainingDigit,0);
            map.put(prefixSum,map.getOrDefault(prefixSum,0)+1);
        }
        return count;

    }
}
