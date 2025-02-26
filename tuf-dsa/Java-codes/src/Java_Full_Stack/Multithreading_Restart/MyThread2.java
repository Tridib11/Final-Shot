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
        MyThread2 t2=new MyThread2("Tridib");
        t2.start();
    }
}
