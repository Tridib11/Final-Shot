package Java_Full_Stack.Multithreading;

public class Main {
    public static void main(String[] args) {

        RunableWorld world=new RunableWorld(); //new state
        Thread t1=new Thread(world);
        t1.start();//runable state
        for(int i=0;i<100;i++){
            System.out.println(Thread.currentThread().getName());
        }

//        World world=new World();
//        world.start();
//        for(int i=0;i<100;i++){
//            System.out.println(Thread.currentThread().getName());
//        }


    }
}
