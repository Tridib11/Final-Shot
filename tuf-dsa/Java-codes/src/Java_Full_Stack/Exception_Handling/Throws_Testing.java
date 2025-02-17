package Java_Full_Stack.Exception_Handling;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Throws_Testing {
    public static void main(String[] args) throws Exception {
        method2();
        System.out.println("Hello");
    }

    private static void method2() throws FileNotFoundException {
        method1();
    }

    private static void method1() throws FileNotFoundException {
        FileReader fileReader=new FileReader("a.txt");
    }
}
