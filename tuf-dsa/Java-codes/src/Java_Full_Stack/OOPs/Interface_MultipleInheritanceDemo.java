package Java_Full_Stack.OOPs;

public class Interface_MultipleInheritanceDemo {
    public static void main(String[] args) {
        Bear b=new Bear();
        b.type();
    }
}


interface Herbivore{
    void type();
}

interface Carnovore{
    void type();
}

class Bear implements Herbivore,Carnovore{
    public void type(){
        System.out.println("I am herbivore and Carnivore");
    }
}
