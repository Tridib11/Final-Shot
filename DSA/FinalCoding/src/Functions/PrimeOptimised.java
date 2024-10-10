package Functions;

import java.util.Scanner;

public class PrimeOptimised {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=2;i<=n;i++){
            if(isPrime(i)){
                System.out.println(i);
            }

        }
    }

    private static boolean isPrime(int n){
        boolean result=true;
        for(int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                result=false;
                break;
            }
        }
        return result;
    }
}
