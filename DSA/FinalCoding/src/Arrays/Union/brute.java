package Arrays.Union;


import java.util.*;
public class brute {
    public static void main(String[] args) {
        int[] a={1,2,3,4,6};
        int[] b={2,3,5};
        System.out.println(sortedArray(a,b));
    }
    public static List< Integer > sortedArray(int []a, int []b) {
        // Write your code here
        HashSet<Integer> set1=new HashSet<>();

        for(int i:a){
            set1.add(i);
        }

        for(int i:b){
            set1.add(i);
        }

        List<Integer> ans=new ArrayList<>(set1);

        return ans;
    }
}
