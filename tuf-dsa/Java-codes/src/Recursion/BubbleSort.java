package Recursion;

import java.util.Arrays;

public class BubbleSort {
    public static void main(String[] args) {
        int[] arr={3,1,4,2};
        bubbleSort(arr,arr.length-1,0);
        System.out.println(Arrays.toString(arr));
    }

    private static void bubbleSort(int[] arr,int row,int col){
        if(row==0){
            return;
        }
        if(col<row){
            if(arr[col]>arr[col+1]){
                int temp=arr[col];
                arr[col]=arr[col+1];
                arr[col+1]=temp;
            }
            bubbleSort(arr,row,col+1);
        }else{
            bubbleSort(arr,row-1,col);
        }
    }
}
