package Recursion;

public class PassingNUmbers {
    public static void main(String[] args) {
        fun1(5);
    }


    static void fun(int n){
        if(n==0){
            return;
        }

        fun(n--);
    }


    static void fun1(int n){
        if(n==0){
            return;
        }
        System.out.println(n);

        fun1(--n);
    }
}
