package Java_Full_Stack.Multithreading_Restart;

//public class World extends Thread {
//    @Override
//    public void run(){
//        for(;;){
//            System.out.println(Thread.currentThread().getName());
//        }
//    }
//}

public class World implements Runnable {
    @Override
    public void run(){
        for(;;){
            System.out.println(Thread.currentThread().getName());
        }
    }
}
