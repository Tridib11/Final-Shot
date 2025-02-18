package Java_Full_Stack.Exception_Handling;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Checked_Unchecked_Testing {
    public static void main(String[] args) {
        readFile("myFile.txt");
    }

    private static void readFile(String fileName) throws FileNotFoundException{

        //one way
//        try{
//            FileReader reader=new FileReader(fileName);
//        }
//        catch (FileNotFoundException e){
//            System.out.println("Fle doesnot exist");
//        }

        //another way to use throws above
        FileReader reader=new FileReader(fileName);


    }
}
