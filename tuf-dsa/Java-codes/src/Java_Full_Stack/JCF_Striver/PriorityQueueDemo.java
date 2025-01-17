package Java_Full_Stack.JCF_Striver;

import java.util.PriorityQueue;

public class PriorityQueueDemo {
    public static void main(String[] args) {
        /*
        Min heap ds
        You will not be able to see the ascending order but
        Stores element and whenever you ask for peek it will give you the smallest element
         */

        PriorityQueue<Integer> pq=new PriorityQueue();
        pq.offer(1);
        pq.offer(0);
        pq.offer(5);
        pq.offer(4);


//        while(pq.isEmpty()==false){
//            System.out.print(pq.peek()+",");
//            pq.poll();
//        }
//        System.out.println();

        System.out.println(pq);
        System.out.println(pq.peek());
        pq.poll();
        System.out.println(pq);
        System.out.println(pq.peek());

        pq.poll();
        System.out.println(pq);
        pq.peek();



    }
}
