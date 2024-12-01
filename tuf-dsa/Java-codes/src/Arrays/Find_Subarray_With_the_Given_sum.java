package Arrays;
import java.util.*;
public class Find_Subarray_With_the_Given_sum {
    public static void main(String[] args) {

    }

    public int subarraySum(int[] nums, int sum) {
        int currSum=0;
        int count=0;
        HashMap<Integer,Integer> map=new HashMap<>();
        map.put(0,1);
        for(int i:nums){
            currSum+=i;
            int remainingDigits=currSum-sum;
            count+=map.getOrDefault(remainingDigits,0);
            map.put(currSum,map.getOrDefault(currSum,0)+1);
        }
        return count;
    }


}
