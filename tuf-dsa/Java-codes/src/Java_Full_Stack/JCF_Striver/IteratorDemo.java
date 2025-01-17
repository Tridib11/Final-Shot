package Java_Full_Stack.JCF_Striver;

import java.util.ArrayList;
import java.util.Iterator;

public class IteratorDemo {
    public static void main(String[] args) {
        ArrayList<Integer> ans= new ArrayList<>();

        ans.add(1);
        ans.add(2);
        ans.add(3);

        Iterator<Integer> iterator=ans.iterator();
        while(iterator.hasNext()){
            Integer num=iterator.next();
            System.out.println(num);
        }
    }
}
