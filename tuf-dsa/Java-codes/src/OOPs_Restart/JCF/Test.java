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
        ArrayList<Integer> alist=new ArrayList<>(); //one ended list
        alist.add(1);
        alist.add(2);
        alist.add(3);
        alist.add(4);
        System.out.println(alist);
        System.out.println(alist.size());
        System.out.println(alist.get(2));
        System.out.println(alist.remove(0));
        alist.add(0,10);
        System.out.println(alist.contains(10));
        System.out.println(alist);

    }

}
