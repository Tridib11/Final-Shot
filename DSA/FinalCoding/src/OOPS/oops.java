package OOPS;

public class oops {
    public static void main(String[] args) {
        Pen p1=new Pen();
        p1.setColor("Blue");
        p1.getColor();

    }
}


class Pen{
    private String color;
    int tip;
    void setColor(String newColor){
        color=newColor;
    }

    void getColor(){
        System.out.println(color);
    }
    void setTip(int newTip){
        tip=newTip;
    }
}