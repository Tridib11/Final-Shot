package Java_Full_Stack.JCF_Restart;

class Data{
    private Integer num;
    private String name;
    Data(int num,String name){
        this.num=num;
        this.name=name;
    }

    public void setNum(Integer _num){
        this.num=_num;
    }

    public void setName(String _name){
        this.name=_name;
    }

    public int getNum(){
        return num;
    }

    public String getName(){
        return name;
    }
}
public class CustomClass {
    public static void main(String[] args) {
        Data dataObj1=new Data(10,"Tridib");
        Data dataObj2=new Data(11,"Rohan");
        System.out.println(dataObj1.getName());
    }
}
