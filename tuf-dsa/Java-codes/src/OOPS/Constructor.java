package OOPS;

public class Constructor {
    String word;
    public Constructor(){
        System.out.println("Default costructor called");
    }
    public Constructor(String word){
        this.word=word;
        System.out.println("Parameterised constructor says "+word);
    }
    public void printBalance(){
        System.out.println("Hello");
    }

}
class Testing{
    public static void main(String[] args) {
        Constructor cons=new Constructor();
        cons.printBalance();

        Constructor cons1=new Constructor("Param");

    }

}
