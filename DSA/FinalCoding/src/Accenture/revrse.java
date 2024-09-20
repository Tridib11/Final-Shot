package Accenture;

import java.util.Arrays;

public class revrse {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,5,6};
        //6,5,4,3,2,1
        reverse(arr);

        printOdd(arr);
        printEven(arr);
    }

    private static void printEven(int[] arr){
        System.out.println("EVEN positions");
        for(int i=0;i<arr.length;i++){
            if((i+1)%2==0){
                System.out.println(arr[i]);
            }
        }
    }

    private  static void printOdd(int[] arr){
        System.out.println("ODD positions");
        for(int i=0;i<arr.length;i++){
            if((i+1)%2!=0){
                System.out.println(arr[i]);
            }
        }
    }

    private static void reverse(int[] arr){
        int start=0;
        int end=arr.length-1;
        while(start<=end){
            int temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }
}
