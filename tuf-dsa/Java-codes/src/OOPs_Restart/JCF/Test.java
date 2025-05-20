package OOPs_Restart.JCF;

import java.util.*;

class Data{
    public Integer num;
    public String name;
    Data(int num,String name){
        this.num=num;
        this.name=name;
    }
}
public class Test {
    public static void main(String[] args) {
//        ArrayList<Integer> alist=new ArrayList<>(); //one ended list
//        alist.add(1);
//        alist.add(2);
//        alist.add(3);
//        alist.add(4);
//        System.out.println(alist);
//        System.out.println(alist.size());
//        System.out.println(alist.get(2));
//        System.out.println(alist.remove(0));
//        alist.add(0,10);
//        System.out.println(alist.contains(10));
//        System.out.println(alist);

        //MUltiEnded list

//        LinkedList<Integer> ll=new LinkedList<>();
//        ll.add(1);
//        ll.add(2);
//        ll.addFirst(0);
//        ll.addLast(10);
//        System.out.println(ll.removeLast());
//        System.out.println(ll);


//        //LIFO
//        Stack<Integer> st=new Stack<>();
//        st.push(2);
//        st.push(4);
//        st.push(6);
//        System.out.println(st);
//        System.out.println(st.peek());
//        st.pop();
//        System.out.println(st);
//        System.out.println(st.isEmpty());


//        HashSet<Integer>set=new HashSet<>();
//        set.add(1);
//        set.add(2);
//        set.add(3);
//        set.add(0);
//        System.out.println(set);
//        set.remove(3);
//        for(int num:set){
//            System.out.println(num);
//        }

//        TreeSet<Integer> set=new TreeSet<>();
//        set.add(1);
//        set.add(2);
//        set.add(3);
//        set.add(-1);
//        set.add(0);
//
//        System.out.println(set);

//        System.out.println(set.floor(4)); <=4
//        System.out.println(set.ceiling(2)); >=2


        ArrayDeque<Integer> ad=new ArrayDeque<>();
        //offer - > add
        //FIFO

        ad.offer(1);
        ad.offer(2);
        ad.offer(3);
        System.out.println(ad);
        System.out.println(ad.peek());






    }

}
