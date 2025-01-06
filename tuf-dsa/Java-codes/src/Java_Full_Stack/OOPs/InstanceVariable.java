package Java_Full_Stack.OOPs;

public class InstanceVariable {


    int a=10; //Instance
    int b;
    //variables that are declared inside the class and outside the method are called
    //instance variable
    public static void main(String[] args) {
        InstanceVariable instance=new InstanceVariable();
        System.out.println(instance.a);
        System.out.println(instance.b);

    }
}
