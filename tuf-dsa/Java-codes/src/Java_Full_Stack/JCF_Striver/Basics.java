package Java_Full_Stack.JCF_Striver;

public class Basics {

}


class Data{
    private Integer number;
    private String name;

    private InternalData internalData;

    Data(int _num,String _name,int revenue){
        this.number=_num;
        this.name=_name;
        this.internalData=new InternalData(revenue);
    }

    private void setNum(Integer num){
        this.number=num;
    }

    private void setName(String name){
        this.name=name;
    }

    private Integer getNumber(){
        return number;
    }

    private String getName(){
        return name;
    }
}


class InternalData{
    public Integer revenue;
    InternalData(Integer revenue){
        this.revenue=revenue;
    }
}
