package Recursion;

public class product_of_nto1 {
    public static void main(String[] args) {
        System.out.println(product(5));
    }
    private static int product(int n){
        if(n==1){
            return 1;
        }

        return n*product(n-1);
    }
}
