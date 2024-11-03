package Java_Collection_Framework;


class Data{
    private Integer num;
    private String name;
    private InternalData internalData;
    Data(){
        System.out.println("Default constructor called");
    }
    Data(int _num,String _name,int _revenue){
        this.num=_num;
        this.name=_name;
        this.internalData=new InternalData(_revenue);
    }

    public void setNum(Integer _num){
        this.num=_num;
    }
    public void setName(String _name){
        this.name=_name;
    }
    public String getName(){
        return name;
    }
}

class InternalData{
    public Integer revenue;
    InternalData(Integer _revenue){
        this.revenue=_revenue;
    }
}
public class CustomClass {
    public static void main(String[] args) {
        Data obj=new Data();
        Data dataobj1=new Data(9,"Raj",10000);
        Data dataobj2=new Data(7,"TUF",100000);
        dataobj1.setName("Tridib");
        System.out.println(dataobj1.getName());
    }
}
