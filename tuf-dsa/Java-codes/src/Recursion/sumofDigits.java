package Recursion;

public class sumofDigits {
    public static void main(String[] args) {
        System.out.println(sumofdigits(241));
    }

    private static int sumofdigits(int n){
        if(n==0){
            return 0;
        }

        return (n%10)+sumofdigits(n/10);
    }
}
