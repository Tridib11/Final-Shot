package Arrays;

import java.util.Arrays;

public class CountSort {
    public static void main(String[] args) {

        int[] arr={4,2,1,5,7,6,9};
        System.out.println(Arrays.toString(countSort(arr)));

    }
    private static int[] countSort(int[] arr){
        //Finding the max
        int largest=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            largest=Math.max(largest,arr[i]);
        }

        int[] countArr=new int[largest+1];
        //Increasing the frequency
        for(int i=0;i<arr.length;i++){
            countArr[arr[i]]++;
        }

        //sorting
        int j=0;
        for(int i=0;i<countArr.length;i++){
            while(countArr[i]>0){
                arr[j]=i;
                j++;
                countArr[i]--;
            }
        }

        return arr;
    }
}
