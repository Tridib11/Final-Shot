package Recursion;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class FIndAllOccurences {
    public static void main(String[] args) {
        int[] arr={1,2,3,4,4,5,6};
        System.out.println(findAllIndex(arr,4,0));
    }

    private static ArrayList<Integer> findAllIndex(int[] arr,int target,int index){
        ArrayList<Integer> list=new ArrayList<>();
        if(index==arr.length){
            return list;
        }
        if(arr[index]==target){
            list.add(index);
        }

        ArrayList<Integer> ansFromBellow=findAllIndex(arr,target,index+1);
        list.addAll(ansFromBellow);
        return list;
    }
}
