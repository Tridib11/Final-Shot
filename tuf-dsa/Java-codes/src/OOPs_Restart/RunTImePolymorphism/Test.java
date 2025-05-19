package OOPs_Restart.RunTImePolymorphism;

class Animal{
    void sound(){
        System.out.println("Sound sound");
    }
}

class Dog extends Animal{
    @Override
    void sound(){
        System.out.println("Barks");
    }
}

class Cat extends Animal{
    @Override
    void sound(){
        System.out.println("Meow");
    }
}
public class Test {
    public static void main(String[] args) {
        Animal a;
        a=new Cat();
        a.sound();

        a=new Dog();
        a.sound();
    }
}
