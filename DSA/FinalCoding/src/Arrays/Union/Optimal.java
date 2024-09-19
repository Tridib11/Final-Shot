package Arrays.Union;
import java.util.*;


public class Optimal {
    public static List< Integer > sortedArray(int []a, int []b) {
        // Write your code here
        int i=0,j=0;
        ArrayList<Integer> union=new ArrayList<>();
        while(i<a.length && j<b.length){
            if(a[i]<=b[j]){
                if(union.size()==0 || union.get(union.size()-1)!=a[i]){
                    union.add(a[i]);
                }
                i++;
            }else{
                if(union.size()==0 || union.get(union.size()-1)!=b[j]){
                    union.add(b[j]);
                }
                j++;
            }
        }


        while(i<a.length){
            if(union.get(union.size()-1)!=a[i]){
                union.add(a[i]);
            }
            i++;
        }

        while(j<b.length){
            if(union.get(union.size()-1)!=b[j]){
                union.add(b[j]);
            }
            j++;
        }

        return union;




    }
}
