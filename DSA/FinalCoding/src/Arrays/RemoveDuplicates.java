package Arrays;
import java.util.*;
public class RemoveDuplicates {
    public static void main(String[] args) {

    }

    private static int RemoveDuplicates(int[] arr){
        TreeSet<Integer> set=new TreeSet<>();

        for(int i=0;i<arr.length;i++){
            set.add(arr[i]);
        }

        int length=set.size();
        int count=0;
        for(int i:set){
            arr[count++]=i;
        }
        return length;
    }
}
