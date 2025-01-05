package Java_Full_Stack.OOPs;

public class Main {
    public static void main(String[] args) {
        Student Tridib=new Student();
        Tridib.name="Tridib";
        System.out.println(Tridib);
        System.out.println(Tridib.rno);
        System.out.println(Tridib.name);
    }
}

class Student{
    int rno;
    String name;
    float marks;
}
