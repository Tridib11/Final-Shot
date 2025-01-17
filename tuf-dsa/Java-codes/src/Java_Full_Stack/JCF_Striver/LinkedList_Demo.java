package Java_Full_Stack.JCF_Striver;
import java.util.*;
public class LinkedList_Demo {
    public static void main(String[] args) {
        LinkedList<Integer> ll=new LinkedList<>();
        ll.add(1);
        ll.add(2);
        ll.add(3);
        ll.addFirst(9);
        ll.addLast(10);

        ll.removeFirst();
        ll.removeLast();
        System.out.println(ll);
        System.out.println(ll.getFirst());
        System.out.println(ll.contains(3));
    }
}
