package Java_Full_Stack.OOPs;

public class StaticTesting {
    static int a=10;

    public static void main(String[] args) {
        StaticTesting obj1=new StaticTesting();
        System.out.println(obj1.a);

        StaticTesting obj2=new StaticTesting();
        obj2.a=30;
        System.out.println(obj2.a);

        System.out.println(obj1.a);
    }
}
