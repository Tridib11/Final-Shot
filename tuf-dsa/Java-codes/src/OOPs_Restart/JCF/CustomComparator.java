package OOPs_Restart.JCF;
import java.util.*;
public class CustomComparator {
    public static void main(String[] args) {
       List<Integer> al=Arrays.asList(2,5,1,4,3,6);
//        System.out.println(al);
        //function
//        Collections.sort(al,new Comparator<Integer>(){
//            @Override
//            public int compare(Integer num1,Integer num2){
//                if(num1<num2){
//                    return 1;
//                }else if(num1>num2){
//                    return -1;
//                }
//                return 0;
//            }
//        });
//
//        System.out.println(al);


        //Lambda

        Collections.sort(al,(num1,num2)->num2-num1);
        System.out.println(al);



    }
}
