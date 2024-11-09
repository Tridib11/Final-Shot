package Recursion;

public class ProductofDigit {
    public static void main(String[] args) {
        System.out.println(productofdigits(1342));
    }

    private static int productofdigits(int n){
        if(n%10==n){
            return n;
        }

        return (n%10)*productofdigits(n/10);
    }
}
