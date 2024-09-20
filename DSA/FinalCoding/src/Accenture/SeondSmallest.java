package Accenture;

import java.util.Arrays;

public class SeondSmallest {
    public static void main(String[] args) {
        /*
        3,1,4,1,5
        3
         */

        int[] arr={3,1,4,1,5};
        int smallest=arr[0];
        int secondSmallest=0;
        Arrays.sort(arr);
        for(int i=1;i<arr.length;i++){
            if(arr[i]<smallest){
                smallest=arr[i];
            }
        }
        for(int i=0;i<arr.length;i++){
            if(arr[i]>smallest){
                secondSmallest=arr[i];
                break;
            }
        }



        System.out.println(secondSmallest);



    }
}
