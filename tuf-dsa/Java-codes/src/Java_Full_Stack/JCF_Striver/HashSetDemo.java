package Java_Full_Stack.JCF_Striver;

import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {
        /*
        * Stores unique element in any random order
        *
        * */

        HashSet<Integer> hs=new HashSet<>();
        hs.add(1);
        hs.add(1);
        hs.add(2);
        hs.add(4);
        System.out.println(hs);
        for(var i:hs){
            System.out.println(i);
        }
        hs.remove(2);
        System.out.println(hs);
    }
}
