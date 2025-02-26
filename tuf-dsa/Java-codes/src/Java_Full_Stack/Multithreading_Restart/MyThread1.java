package Java_Full_Stack.Multithreading_Restart;

public class MyThread1 extends Thread {
    @Override
    public void run(){
       for(int i=1;i<=5;i++){
           try{
               Thread.sleep(1000);
               System.out.println(i);
           }catch(Exception e){
               System.out.println(e);
           }
       }
    }
    public static void main(String[] args) throws InterruptedException {
        MyThread1 t1=new MyThread1();
        t1.start();
        System.out.println(t1.getState());
        t1.join();
        System.out.println(t1.getState());
        System.out.println("Hello");
    }
}
