package Java_Full_Stack;

public class InctanceOfDemo {
    public static void main(String[] args) {
        String s="Rohan";
        System.out.println(s);
        String s1=new String("ROhan");
        System.out.println(s1);
        boolean result=s1 instanceof String;
        System.out.println(result);
    }
}
