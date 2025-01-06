package Java_Full_Stack.OOPs;

public class Instance {
    int a=10;

    public static void main(String[] args) {
        Instance obj1=new Instance();
        System.out.println(obj1.a);

        Instance obj2=new Instance();
        obj2.a=30;
        System.out.println(obj2.a);

        System.out.println(obj1.a);
    }
}
