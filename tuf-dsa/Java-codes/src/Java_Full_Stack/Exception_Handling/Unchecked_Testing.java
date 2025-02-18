package Java_Full_Stack.Exception_Handling;

public class Unchecked_Testing {
    public static void main(String[] args) {
        String name=null;
        printLength(name);
    }

    private static void printLength(String myString){
        System.out.println(myString.length());
    }
}
