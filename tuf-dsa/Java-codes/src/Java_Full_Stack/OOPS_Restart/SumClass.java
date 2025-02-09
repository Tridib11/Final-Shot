package Java_Full_Stack.OOPS_Restart;


class Sum{

    Sum(){
        System.out.println("Default constructor called");
    }
    public int Sum(int a , int b){
        return a+b;
    }
}
public class SumClass {
    public static void main(String[] args) {
        Sum s=new Sum();
        int ans=s.Sum(2,3);
        System.out.println(ans);

    }
}
