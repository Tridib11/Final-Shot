package Accenture;
import java.util.*;
public class BitCOunt {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int bit=Integer.bitCount(n);
        String binary=Integer.toBinaryString(n);
        System.out.println(bit);
        System.out.println(binary);
    }
}
