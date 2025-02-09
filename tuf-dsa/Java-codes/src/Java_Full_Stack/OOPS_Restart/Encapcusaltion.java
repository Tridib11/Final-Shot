package Java_Full_Stack.OOPS_Restart;



class Bank{

    private int balance=100;

    public int getBalance(){
        return balance;
    }

    public void setBalance(int newBalance){
        balance=newBalance;
    }
}
public class Encapcusaltion {

    public static void main(String[] args) {
        Bank b=new Bank();
        b.setBalance(200);
        System.out.println(b.getBalance());
    }
}
