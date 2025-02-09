package Java_Full_Stack.OOPS_Restart;

class Vehicle2{
    public void Honk(){
        System.out.println("Honk !!!!!!!");
    }
}

class Car2 extends Vehicle2{
    private String numberOfCar;

    public Car2(String numberOfCar){
        this.numberOfCar=numberOfCar;
    }

    public void printCarNumber(){
        System.out.println(numberOfCar);
    }

    //Method Overriding
    @Override
    public void Honk(){
        System.out.println("Car Honks");
    }

}

class Bus2 extends Vehicle2{
    private String numberOfBus;

    public Bus2(String numberOfBus){
        this.numberOfBus=numberOfBus;
    }

    public void printBusNumber(){
        System.out.println(numberOfBus);
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        Car2 c= new Car2("KA21145");
        c.printCarNumber();
        c.Honk();

        Bus2 b=new Bus2("KA14456");
        b.printBusNumber();
        b.Honk();
    }
}
