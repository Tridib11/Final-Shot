package Arrays;
import java.util.*;
public class union {
    public static ArrayList<Integer> findUnion(int arr1[], int arr2[], int n, int m)
    {
        // add your code here
        ArrayList<Integer> union=new ArrayList<>();
        int i=0,j=0;
        while(i<n && j<m){
            if(arr1[i]<=arr2[j]){
                if(union.size()==0 || union.get(union.size()-1)!=arr1[i]){
                    union.add(arr1[i]);
                }
                i++;
            }else{
                if(union.size()==0 || union.get(union.size()-1)!=arr2[j]){
                    union.add(arr2[j]);
                }
                j++;
            }
        }

        while(i<n){
            if(union.get(union.size()-1)!=arr1[i]){
                union.add(arr1[i]);
            }
            i++;
        }

        while(j<m){
            if(union.get(union.size()-1)!=arr2[j]){
                union.add(arr2[j]);
            }
            j++;
        }

        return union;
    }
}
