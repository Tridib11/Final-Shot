package Java_Full_Stack.JCF_Striver;

import java.util.TreeSet;

public class TreeSetDemo {
    public static void main(String[] args) {
        /*
         * Stores unique element in any Sorted order(log time)
         * log n time where n is the size of the treeSet
         * */

        TreeSet<Integer> ts=new TreeSet<>();
        ts.add(12);
        ts.add(9);
        ts.add(1);
        ts.add(4);


        System.out.println(ts);
//        for(var i:ts){
//            System.out.println(i);
//        }
//        ts.remove(2);
//        System.out.println(ts);
        System.out.println(ts.floor(8));//first value less than or equal to 8(<=)
        System.out.println(ts.ceiling(8));//fist value greater than or equal to 8(>=)
    }
}
