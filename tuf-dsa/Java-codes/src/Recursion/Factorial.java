package Recursion;

public class Factorial {
    public static void main(String[] args) {
        System.out.println(factorial(0));
    }
    public static long factorial(int n) {
        //your code goes here //wprkinhgfine
        if(n<=1){
            return 1;
        }
        return n*factorial(n-1);
    }


}
