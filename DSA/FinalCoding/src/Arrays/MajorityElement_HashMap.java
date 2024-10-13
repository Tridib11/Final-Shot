package Arrays;
import java.util.*;
public class MajorityElement_HashMap {
    public static void main(String[] args) {

    }


    private static int majorityElement(int[] arr){
        int length=arr.length;
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<arr.length;i++){
            int value=map.getOrDefault(arr[i],0);
            map.put(arr[i],value+1);
        }

        for(Map.Entry<Integer,Integer> it:map.entrySet()){
            if(it.getValue()>(length/2)){
                return it.getKey();
            }
        }
        return -1;
    }
}
