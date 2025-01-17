package Java_Full_Stack.JCF_Striver;

import java.util.*;

public class TreeMapDemo {
    public static void main(String[] args) {
        /*
        Always stores sorted order of keys

        uses log(n)
         */
        TreeMap<Integer,String> map=new TreeMap<>();
        map.put(12,"Tridib");
        map.put(1,"Raj");
        map.put(8,"Rima");
        System.out.println(map);
        System.out.println(map.get(8));
        System.out.println(map.size());
//        map.remove(2);
//        System.out.println(map);


        System.out.println(map.ceilingKey(2));
        System.out.println(map.keySet()); //gives all the keys in the set
    }
}
