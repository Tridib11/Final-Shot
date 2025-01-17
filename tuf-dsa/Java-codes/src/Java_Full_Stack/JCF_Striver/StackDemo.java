package Java_Full_Stack.JCF_Striver;

import java.util.Stack;

public class StackDemo {
    public static void main(String[] args) {
        /*
        LIFO
         */

        Stack<Integer> s=new Stack<>();
        s.push(2);
        s.push(4);
        s.push(6);

        System.out.println(s);
        System.out.println(s.peek());
        s.pop();
        System.out.println(s);
        System.out.println(s.peek());
        System.out.println(s.isEmpty());
    }
}
