package Strings;
import java.util.Arrays;
public class testing {
    public static void main(String[] args) {
        String a="Rohan";
        String b="Rohan";
        System.out.println(a==b);

        String c=new String("Rohan");
        String d=new String("Rohan");
        System.out.println(c==d);
        System.out.println(c.equals(d));

        System.out.println(Arrays.toString(new int[]{1,2,3,4}));
    }
}
