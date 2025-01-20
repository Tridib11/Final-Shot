package Hashing;

import java.util.Arrays;

public class CountDigits {
    public static void main(String[] args) {
        int[] arr={5,6,5,6,9,6};
        int max=Integer.MIN_VALUE;
        for (int j : arr) {
            max = Math.max(max, j);
        }
        System.out.println(max);


        int[] hash=new int[max+1];

        for(int i:arr){
            hash[i]++;
        }


        System.out.println(Arrays.toString(hash));


        System.out.println(hash[2]);

    }
}
