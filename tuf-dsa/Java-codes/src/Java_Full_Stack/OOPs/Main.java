package Java_Full_Stack.OOPs;

public class Main {
    public static void main(String[] args) {
        Student Tridib=new Student();
        System.out.println(Tridib);
        System.out.println(Tridib.rno);
    }
}

class Student{
    int rno;
    String name;
    float marks;
}
