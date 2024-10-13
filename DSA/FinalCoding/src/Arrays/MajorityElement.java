package Arrays;
import java.util.*;
public class MajorityElement {
    public static void main(String[] args) {

    }


    private static int majorityElement_Hashmap(int[] arr){
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

    private static int majorityElement_Optimal(int[] arr){
        int count=0;
        int element=0;
        for(int i=0;i<arr.length;i++){
            if(count==0){
                element=arr[i];
                count=1;
            }

            else if(arr[i]==element){
                count++;
            }
            else{
                count--;
            }
        }

        int count1=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==element){
                count1++;
            }
        }


        if(count1>((arr.length)/2)){
            return element;
        }
        return -1;


    }
}
