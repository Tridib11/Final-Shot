package Arrays;
import java.util.*;
public class FindSubArraySumEqualsK {
    public static void main(String[] args) {
        int[] arr={10,15,-5,15,-10,5};
        int sum=5;
        subArraySum(arr,sum);

    }


    private static void subArraySum(int[] arr,int sum){
        int currSum=0;
        int start=0;
        int end=-1;
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<arr.length;i++){
            currSum+=arr[i];
            if(currSum-sum==0){
                start=0;
                end=i;
                break;
            }
            if(map.containsKey(currSum-sum)){
                start=map.get(currSum-sum)+1;
                end=i;
                break;
            }
            map.put(currSum,i);
        }

        if(end==-1){
            System.out.println("Not found");
        }
        else{
            System.out.println(start+" "+end);
        }
    }



    private static int subArraySumMaxLength(int[] arr,int sum){
        int currSum=0;
        int start=0;
        int end=-1;
        int maxLength=-1;
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<arr.length;i++){
            currSum+=arr[i];
            if(currSum-sum==0){
                start=0;
                end=i;
                maxLength=Math.max(maxLength,(end-start)+1);

            }
            if(map.containsKey(currSum-sum)){
                start=map.get(currSum-sum)+1;
                end=i;
                maxLength=Math.max(maxLength,(end-start)+1);
            }
            map.put(currSum,i);
        }

        if(end==-1){
            return end;
        }
        else{
            return maxLength;
        }
    }
}
