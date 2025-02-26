package Java_Full_Stack.Multithreading_Restart;

public class MyThread2 extends Thread {

    MyThread2(String name){
        super(name);
    }
    @Override
    public void run(){
        for (int i = 0; i < 6; i++) {
            try{
                System.out.println(Thread.currentThread().getName()+" - Priority: "+Thread.currentThread().getPriority()+" -count: "+i);
            }
            catch (Exception e){
                System.out.println(e);
            }
        }
    }
    public static void main(String[] args) {
        MyThread2 low=new MyThread2("low");
        MyThread2 medium=new MyThread2("medium");
        MyThread2 high=new MyThread2("high");
        low.setPriority(Thread.MIN_PRIORITY);
        medium.setPriority(Thread.NORM_PRIORITY);
        high.setPriority(Thread.MAX_PRIORITY);
        low.start();
        medium.start();
        high.start();
    }
}
