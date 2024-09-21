package Accenture;

import java.util.Scanner;

public class fibonacci {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int first=0;
        int second=1;
        System.out.print(first+" "+second+" ");
        for(int i=0;i<n-2;i++){
            int d=first+second;
            System.out.print(d+" ");
            first=second;
            second=d;
        }
    }
}
