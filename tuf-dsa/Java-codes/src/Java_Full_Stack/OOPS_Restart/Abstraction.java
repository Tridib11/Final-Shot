package Java_Full_Stack.OOPS_Restart;


abstract class BankAccount{
    double balance;
    abstract void addMoney(double money);
    abstract void canWithdrawMoney(double amount);

    void updateBalance(double _balance){
        balance=_balance;
    }
    public double getBalance(){
        return balance;
    }
}

class SavingsAccount extends BankAccount{
    public void addMoney(double amount){
        super.updateBalance(super.getBalance()+amount);
    }

    public void canWithdrawMoney(double amount){
        if(super.getBalance()<=amount){
            System.out.println("User can withdraw money");
        }else{
            System.out.println("Insufficient balance");
        }
    }
}


class CurrentAccount extends BankAccount{
    double minimumLimit=1000.0;
    public void addMoney(double money){
        super.updateBalance(super.getBalance()+money);
    }

    public void canWithdrawMoney(double withdrawAmount){
        if(super.getBalance()-withdrawAmount >=minimumLimit){
            System.out.println("User can withdraw");
        }else{
            System.out.println("User cannot withdraw");
        }
    }
}
public class Abstraction {
    public static void main(String[] args) {

    }
}
