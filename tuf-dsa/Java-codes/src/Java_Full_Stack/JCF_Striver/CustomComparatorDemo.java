package Java_Full_Stack.JCF_Striver;

import java.util.ArrayList;
import java.util.Collections;

public class CustomComparatorDemo {
    public static void main(String[] args) {
        ArrayList<Integer> ans=new ArrayList<>();
        ans.add(1);
        ans.add(5);
        ans.add(4);

        System.out.println(ans);
        Collections.sort(ans);
        System.out.println(ans);
    }
}
