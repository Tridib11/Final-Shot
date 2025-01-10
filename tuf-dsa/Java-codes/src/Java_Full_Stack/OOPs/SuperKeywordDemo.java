package Java_Full_Stack.OOPs;

/*
- to access all the parents properties
- to access parents functions
- to access parents constructor

 */
public class SuperKeywordDemo {
    public static void main(String[] args) {
        Horse1 h=new Horse1();
    }
}

class Dog1{
    Dog1(){
        System.out.println("Dog constructor called");
    }
}

class Horse1 extends Dog1{
    Horse1(){
        super();
        System.out.println("Horse COnstructor called");
    }
}
