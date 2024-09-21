package Accenture;
import java.util.*;
public class Trobonacci {
    // 0 0 1 1 2 4 ...
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int first=0;
        int second=0;
        int third=1;
        int d;
        System.out.print(first+" "+second+" "+third+" ");
        for(int i=0;i<n-3;i++){
            d=first+second+third;
            System.out.print(d+" ");
            first=second;
            second=third;
            third=d;
        }
    }
}
