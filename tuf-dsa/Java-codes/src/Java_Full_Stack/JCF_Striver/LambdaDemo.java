package Java_Full_Stack.JCF_Striver;

import java.util.ArrayList;
import java.util.Collections;

public class LambdaDemo {
    public static void main(String[] args) {
        ArrayList<Integer> al=new ArrayList<>();
        al.add(1);
        al.add(5);
        al.add(4);

        /*
        in Descending order
        [num1,num2]

        num1<num2 -> wrong order, swap means return positive
         */
        Collections.sort(al,(num1,num2)->num2-num1);
        System.out.println(al);
    }
}
