package Java_Full_Stack;

public class StringTesting {
    public static void main(String[] args) {
        String a="Rohan";
        String b="Rohan";
        System.out.println(a==b);
        System.out.println(a.equals(b));

        String a1=new String("Rohan");
        String a2=new String("Rohan");
        System.out.println(a1==a2); //False
        System.out.println(a1.equals(a2)); //true
    }
}
