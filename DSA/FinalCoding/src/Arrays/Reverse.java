package Arrays;
import java.util.*;
public class Reverse {
    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
//        int n=sc.nextInt();
        String s=sc.nextLine();
        System.out.println(reverse(s));

    }
    private static String reverse(String s){
        return new StringBuilder(s).reverse().toString();
    }

    private static int reverse(int n){
        int sum=0,d=0;
        while(n!=0){
            d=n%10;
            sum=sum*10+d;
            n=n/10;
        }

        return sum;
    }
}
