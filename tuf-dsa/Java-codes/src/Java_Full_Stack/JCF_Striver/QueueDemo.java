package Java_Full_Stack.JCF_Striver;

import java.util.ArrayDeque;

public class QueueDemo {
    public static void main(String[] args) {
        /*
        FIFO
         */

        ArrayDeque<Integer> ad=new ArrayDeque<>();
        ad.offer(2);
        ad.offer(6);
        ad.offer(9);
        ad.offer(10);
        System.out.println(ad);
        ad.poll();//Take out the first entered element
        System.out.println(ad);
        System.out.println(ad.peek());

    }
}
