package Java_Full_Stack.OOPS_Restart;


class Shit{
    Shit(){
        System.out.println("Stepped on shit");
    }
}

class Chem extends Shit{
    Chem(){
        super();
    }
}
public class SuperTesting {
    public static void main(String[] args) {
        Chem c=new Chem();
    }

}
