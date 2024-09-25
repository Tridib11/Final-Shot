package Arrays;

import java.util.HashMap;

public class TwoSUm {
    public static void main(String[] args) {

    }
    private static int[] twoSum(int[] arr,int target){
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<arr.length;i++){

            int remainingNumber=target-arr[i];
            if(map.containsKey(remainingNumber)){
                return new int[]{map.get(remainingNumber),i};
            }
            map.put(remainingNumber,i);
        }
        return new int[]{-1,-1};
    }
}
