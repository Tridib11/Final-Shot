package Arrays;

import java.util.HashSet;
import java.util.Set;

public class LongestSubsequence {
    public static void main(String[] args) {

    }

    public int longestConsecutive(int[] nums){
        Set<Integer> set=new HashSet<>();
        for(int i:nums){
            set.add(i);
        }

        int ans=0;
        for(int i:nums){
            if(set.contains(i-1)){
                continue;
            }
            else{
                int count=0;
                int current=i;
                while(set.contains(current)){
                    count++;
                    current++;
                }
                ans=Math.max(count,ans);
            }
        }
        return ans;


    }


}
