import java.util.*;
public class RemoveDuplicatesInaString {
    public static void main(String[] args) {
        String str = "Programming";
        System.out.println("Original String: " + str);
        System.out.println("String without duplicates: " + removeDuplicates(str));

    }


    private static String removeDuplicates(String str){
        StringBuilder result = new StringBuilder();
        char[] chars = str.toCharArray();

        for (char c : chars) {
            if (result.indexOf(String.valueOf(c)) == -1) {
                result.append(c);
            }
        }

        return result.toString();

    }
}
