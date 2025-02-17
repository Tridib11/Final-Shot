package Java_Full_Stack.Exception_Handling;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Throw_Testing {
    public static void main(String[] args) throws Exception {
        method2();
        System.out.println("Hello");
    }

    private static void method2() throws Exception{
        method1();
    }

    private static void method1() throws FileNotFoundException {
        try {
            FileReader fileReader=new FileReader("a.txt");
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
            throw new FileNotFoundException("OOPS");
        }
    }
}

