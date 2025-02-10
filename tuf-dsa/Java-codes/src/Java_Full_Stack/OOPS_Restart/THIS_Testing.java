package Java_Full_Stack.OOPS_Restart;


class Thing{

    int x, y;
    Thing(){

        this(10,20);


    }

    Thing(int a ,int b){
        x=a;
        y=b;
    }


    void getResult(){
        System.out.println(x+" , "+y);
    }
}
public class THIS_Testing {
    public static void main(String[] args) {

        Thing t=new Thing();
        t.getResult();
    }
}
