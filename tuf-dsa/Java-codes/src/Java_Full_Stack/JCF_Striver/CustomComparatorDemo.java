package Java_Full_Stack.JCF_Striver;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class CustomComparatorDemo {
    public static void main(String[] args) {
        ArrayList<Integer> ans=new ArrayList<>();
        ans.add(1);
        ans.add(5);
        ans.add(4);

        System.out.println(ans);
        Collections.sort(ans);
        System.out.println(ans);

        //Sorted in a descending order
        Collections.sort(ans, new Comparator<Integer>() {
            @Override
            public int compare(Integer num1, Integer num2) {
                //num1<num2
                //order is wrong
                /*
                If not in the correct order then return Positive 1
                if it is in the correct order return -1 else 0
                 */
                if(num1<num2){
                    return 1;
                }else if(num1>num2){
                    return -1;
                }else{
                    return 0;
                }
            }
        });
        System.out.println(ans);
    }

    //a Function to make it more readable

    private static Comparator<Integer> getComparator() {
        return new Comparator<Integer>() {
            @Override
            public int compare(Integer num1, Integer num2) {
                //num1<num2
                //order is wrong
                /*
                If not in the correct order then return Positive 1
                if it is in the correct order return -1 else 0
                 */
                if (num1 < num2) {
                    return 1;

                } else if (num1 > num2) {
                    return -1;
                } else {
                    return 0;
                }
            }
        };
    }
}
