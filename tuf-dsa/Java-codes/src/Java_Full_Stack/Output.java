package Java_Full_Stack;
import java.util.*;
public class Output {
    public static void main(String[] args) {
        System.out.println(56);
        System.out.println("Kunal");
        System.out.println(Arrays.toString(new int[]{1,2,3,4}));
        String name=null;
        System.out.println(name);
        System.out.println("a"+1);
        System.out.println('a'+1);


        String a=new String("RAm");
        System.out.println(a);

        String s1="Hello";
        String s2="World";
        System.out.println(s1+s2);


        String ans1="Hey man Whassup";
        String ans2="man";
        System.out.println(ans1.contains(ans2));



        StringBuffer str=new StringBuffer(new String("Rahul"));
        System.out.println(str);
    }
}
