package OOPS;

public class Constructor {

    public Constructor(){
        System.out.println("Default costructor called");
    }
    public void printBalance(){
        System.out.println("Hello");
    }

}
class Testing{
    public static void main(String[] args) {
        Constructor cons=new Constructor();
        cons.printBalance();
    }

}
