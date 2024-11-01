package OOPS;

//Base or parent class
class Vehicle{
    String numberOfVehicle;
    public Vehicle(String numberOfVehicle){
        this.numberOfVehicle=numberOfVehicle;
    }
    public void honk(){
        System.out.println("Honk!!!!!!!!!!!!!");
    }
    public void printNumberOfVehicle(){
        System.out.println(numberOfVehicle);
    }
}

//Derived classes

class Car extends Vehicle{
    public Car(String numberOfCar){
        super(numberOfCar);
    }
}

class Bus extends Vehicle{
    public Bus(String numberOfBus){
        super(numberOfBus);
    }

    @Override
    public void honk(){
        System.out.println("Give me way!!!!");
    }

}
public class Inheritance {
    public static void main(String[] args) {

        Car car=new Car("KA12s3");
        car.printNumberOfVehicle();
        car.honk();

        Bus bus=new Bus("WB1234");
        bus.printNumberOfVehicle();
        bus.honk();

    }


}
