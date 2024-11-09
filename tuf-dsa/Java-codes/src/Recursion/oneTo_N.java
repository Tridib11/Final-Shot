package Recursion;

public class oneTo_N {
    public static void main(String[] args) {
        oneToN(8);
    }
    private static void oneToN(int n){
        if(n==0){
            return;
        }
        oneToN(n-1);
        System.out.println(n);

    }
}
