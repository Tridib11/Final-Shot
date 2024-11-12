package Recursion;

public class ReverseANumber {
    public static void main(String[] args) {
        System.out.println(rev2(1234));
    }

    static int rev2(int n){
        int totalDigit=(int)(Math.log10(n))+1;
        return helper(n,totalDigit);
    }

    private static int helper(int n,int totalDigits){
        if(n%10==n){
            return n;
        }

        int rem=n%10;
        return rem*(int)(Math.pow(10,totalDigits-1))+helper(n/10,totalDigits-1);
    }
}
