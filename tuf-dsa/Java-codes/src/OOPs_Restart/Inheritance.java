package OOPs_Restart;

class Vehicle{
    String numberPlate;

    public Vehicle(String numberPlate){
        this.numberPlate=numberPlate;
    }
    public void honk(){
        System.out.println("Honk!!!!!!!!!");
    }
    public void printNumberPlate(){
        System.out.println(numberPlate);
    }
}


class Car extends Vehicle{
    public Car(String numberPlate){
        super(numberPlate);
    }
}

class Bus extends Vehicle{
    public Bus(String numberPlate) {
        super(numberPlate);
    }
}


public class Inheritance {
    public static void main(String[] args) {
        Car car=new Car("HR242424");
        car.printNumberPlate();
        car.honk();
    }

}
