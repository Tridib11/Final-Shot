package Java_Full_Stack.OOPs;

public class Main {
    public static void main(String[] args) {

        Student rohan=new Student(12,"Rohan",20.3f);

        System.out.println(rohan.rno);
    }
}

class Student{
    int rno;
    String name;
    float marks;

    Student(){
        this.name="IDK";
        this.rno=12;
        this.marks=1.2f;
    }

    Student(int rno, String name, float marks) {
        this.rno=rno;
        this.name=name;
        this.marks=marks;
        System.out.println(this.name);
    }

}
