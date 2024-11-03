package Java_Collection_Framework;


class Data{
    public Integer num;
    public String name;
    Data(int _num,String _name){
        this.num=_num;
        this.name=_name;
    }
}
public class CustomClass {
    public static void main(String[] args) {
        Data dataobj1=new Data(9,"Raj");
        Data dataobj2=new Data(7,"TUF");
        dataobj1.name="Tridib";
        System.out.println(dataobj1.name);
    }
}
