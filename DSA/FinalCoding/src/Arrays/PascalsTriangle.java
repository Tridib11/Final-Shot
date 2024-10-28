package Arrays;
import java.util.*;
public class PascalsTriangle {
    public static void main(String[] args) {
        System.out.println(elementAtRowCol(3,2));

    }

    private static int elementAtRowCol(int n,int r){
        n=n-1;r=r-1;
        int res=1;
        for(int i=0;i<r;i++){
            res=res*(n-i);
            res=res/(i+1);
        }
        return res;
    }

    public static List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans=new ArrayList<>();
        for(int i=1;i<=numRows;i++){
            ans.add(getRow(i));
        }
        return ans;

    }
    public static List<Integer> getRow(int rowIndex) {
        rowIndex+=1;
        long ans=1;
        List<Integer> list=new ArrayList<>();
        list.add(1);
        for(int i=1;i<rowIndex;i++){
            ans=ans*(rowIndex-i);
            ans=ans/i;
            list.add((int)ans);
        }
        return list;
    }




}
