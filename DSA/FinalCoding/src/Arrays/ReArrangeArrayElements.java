package Arrays;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class ReArrangeArrayElements {
    public static void main(String[] args) {

    }

    //variety 1

    private static int[] rearrangeArray(int[] arr){
        int n=arr.length;
        int[] newArr=new int[n];
        int positiveIndex=0,negativeIndex=1;
        for(int i=0;i<arr.length;i++){
            if(arr[i]<0){
                newArr[negativeIndex]=arr[i];
                negativeIndex+=2;
            }else{
                newArr[positiveIndex]=arr[i];
                positiveIndex+=2;
            }
        }
        return newArr;
    }

    //variety 2

    public static int[] alternateNumbers(int []arr) {
        // Write your code here.
        ArrayList<Integer> positive=new ArrayList<>();
        ArrayList<Integer> negative=new ArrayList<>();
        for(int i:arr){
            if(i<0){
                negative.add(i);
            }else{
                positive.add(i);
            }
        }
        if(positive.size()>negative.size()){
            for(int i=0;i<negative.size();i++){
                arr[i*2]=positive.get(i);
                arr[i*2+1]=negative.get(i);
            }
            int filledIndex=negative.size()*2;
            for(int i=negative.size();i<positive.size();i++){
                arr[filledIndex]=positive.get(i);
                filledIndex++;
            }
        }

        else{
            for(int i=0;i<positive.size();i++){
                arr[i*2]=positive.get(i);
                arr[i*2+1]=negative.get(i);
            }
            int filledIndex=positive.size()*2;
            for(int i=positive.size();i<negative.size();i++){
                arr[filledIndex]=negative.get(i);
                filledIndex++;
            }
        }

        return arr;
    }


}
