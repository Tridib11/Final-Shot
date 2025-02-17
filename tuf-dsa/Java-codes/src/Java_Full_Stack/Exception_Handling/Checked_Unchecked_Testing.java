package Java_Full_Stack.Exception_Handling;

import java.io.FileReader;

public class Checked_Unchecked_Testing {
    public static void main(String[] args) {
        readFile("myFile.txt");
    }

    private static void readFile(String fileName){
        FileReader reader=new FileReader(fileName);

    }
}
