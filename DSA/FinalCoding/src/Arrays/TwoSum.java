package Arrays;

import java.util.HashMap;

public class TwoSum {
    public static void main(String[] args) {

    }

    private static int[] twoSum(int[] arr,int target){
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<arr.length;i++){
            int remainingTarget=target-arr[i];
            if(map.containsKey(remainingTarget)){
                return new int[]{map.get(remainingTarget),i};
            }
            map.put(arr[i],i);
        }
        return new int[]{-1,-1};
    }
}
