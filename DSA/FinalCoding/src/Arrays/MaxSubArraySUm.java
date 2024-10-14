package Arrays;
import java.util.*;
public class MaxSubArraySUm {
    public static void main(String[] args) {
        List<Integer> list=new ArrayList<>();
        list.add(4);
        list.add(3);
        list.add(1);
        list.add(5);
        list.add(6);
        System.out.println(pairWithMaxSum(list));
    }

    public static int pairWithMaxSum(List<Integer> arr) {
        // Your code goes here

        int max_sum=arr.get(0);
        int sum=0;

        for(int i=0;i<arr.size();i++){
            sum+=arr.get(i);
            if(sum<0){
                sum=0;
            }
            max_sum=Math.max(max_sum,sum);
        }
        return max_sum;
    }
}
