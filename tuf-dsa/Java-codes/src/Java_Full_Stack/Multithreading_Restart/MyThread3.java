package Java_Full_Stack.Multithreading_Restart;

public class MyThread3 extends Thread {

    @Override
    public void run() {
        try{
            Thread.sleep(1000);
            System.out.println("Thread is running....");
        }catch(Exception e){
            System.out.println(e);
        }
    }

    public static void main(String[] args) {
        MyThread3 t=new MyThread3();
        t.start();
    }
}
