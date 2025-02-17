package Java_Full_Stack.OOPS_Restart;

class Vehicle{
    public void Honk(){
        System.out.println("Honk !!!!!!!");
    }
}

class Car extends Vehicle{
    private String numberOfCar;

    public Car(String numberOfCar){
        this.numberOfCar=numberOfCar;
    }

    public void printCarNumber(){
        System.out.println(numberOfCar);
    }

}

class Bus extends Vehicle{
    private String numberOfBus;

    public Bus(String numberOfBus){
        this.numberOfBus=numberOfBus;
    }

    public void printBusNumber(){
        System.out.println(numberOfBus);
    }
}



public class Inheritance {
    public static void main(String[] args) {
//        Car c= new Car("KA21145");
//        c.printCarNumber();
//        c.Honk();

        Vehicle v=new Car("KA");
        v.Honk();


        Bus b=new Bus("KA14456");
        b.printBusNumber();
        b.Honk();

    }
}
