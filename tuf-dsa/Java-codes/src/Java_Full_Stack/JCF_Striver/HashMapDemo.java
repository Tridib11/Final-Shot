package Java_Full_Stack.JCF_Striver;

import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {
        /*
        Not a neceseity it might not be in a sorted order
        if order doesnot matter use hashMap
        Map doesnot stores duplicates
        all functions use O(1)
         */
        HashMap<Integer,String> map=new HashMap<>();
        map.put(1,"Tridib");
        map.put(2,"Raj");
        map.put(3,"Rima");
        map.put(3,"Rohan");
        System.out.println(map);
        System.out.println(map.get(3));
        System.out.println(map.size());
        map.remove(2);
        System.out.println(map);
    }
}
