package Java_Full_Stack.OOPs;

public class Main {
    public static void main(String[] args) {

        Student rohan=new Student(12,"Rohan",20.3f);
    }
}

class Student{
    int rno;
    String name;
    float marks;

    public Student(int rno, String name, float marks) {
        this.rno=rno;
        this.name=name;
        this.marks=marks;
        System.out.println(this.name);
    }

}
