package Java_Full_Stack.OOPs;

public class EncapsulationDemo {
    public static void main(String[] args) {
        Pen pen1=new Pen();
        pen1.setColor("Red");
        pen1.setTip(1);
        System.out.println(pen1.getColor());
        System.out.println(pen1.getTip());


        Pen pen2=new Pen();
        pen2.setColor("Blue");
        pen2.setTip(2);
        System.out.println(pen2.getColor());
        System.out.println(pen2.getTip());



    }
}

class Pen{
    private String color;
    private int tip;

    String getColor(){
        return this.color;
    }

    void setColor(String color){
        this.color=color;
    }

    int getTip(){
        return this.tip;
    }

    void setTip(int tip){
        this.tip=tip;
    }
}