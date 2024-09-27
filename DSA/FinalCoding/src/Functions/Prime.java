package Functions;
import java.util.*;
public class Prime {
    public static void main(String[] args) {
        Prime(13);
    }

    //prime numbers between 1 to n
    private static void Prime(int n){
        for(int i=1;i<=n;i++){
            if(i==1){
                continue;
            }
            if(isPrime(i)){
                System.out.println(i);
            }
        }
    }

    private static boolean isPrime(int n){
        int count=0;
        for(int i=2;i<=n;i++){
            if(n%i==0){
                count++;
            }
        }
        return count<=1?true:false;
    }
}
