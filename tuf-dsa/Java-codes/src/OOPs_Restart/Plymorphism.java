package OOPs_Restart;

class Vehicle2{
    String numberPlate;

    public Vehicle2(String numberPlate){
        this.numberPlate=numberPlate;
    }
    public void honk(){
        System.out.println("Honk!!!!!!!!!");
    }
    public void printNumberPlate(){
        System.out.println(numberPlate);
    }
}


class Car2 extends Vehicle{
    public Car2(String numberPlate){
        super(numberPlate);
    }

    @Override
    public void honk(){
        System.out.println("Car honking");
    }

}

class Bus2 extends Vehicle{
    public Bus2(String numberPlate) {
        super(numberPlate);
    }
}


public class Plymorphism{
    public static void main(String[] args) {
        Car2 car=new Car2("HR242424");
        car.printNumberPlate();
        car.honk();
    }

}
