package Java_Full_Stack.Exception_Handling;

public class Stack_Trace_Exp {
    public static void main(String[] args) {
        try{
            level1();
        }
        catch(Exception e){
//            e.printStackTrace();
            e.getMessage();
        }
    }

    private static void level3(){
        int[] arr=new int[5];
        arr[5]=1;
    }

    private static void level2(){
        level3();
    }

    private static void level1(){
        level2();
    }
}
