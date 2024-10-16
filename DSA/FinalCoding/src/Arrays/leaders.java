package Arrays;
import java.util.*;
public class leaders {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int size=sc.nextInt();
        int[] arr={63,70,80,33,33,47,20};


    }
    static ArrayList<Integer> leaders(int n, int a[]) {
        // Your code here
        int length=a.length;
        ArrayList<Integer> ans=new ArrayList<>();
        int maxElement=Integer.MIN_VALUE;
        for(int i=length-1;i>=0;i--){
            if(maxElement<=a[i]){
                maxElement=a[i];
                ans.add(maxElement);
            }
        }

        int start=0;
        int end=ans.size()-1;
        while(start<=end){
            int temp=ans.get(start);
            ans.set(start,ans.get(end));
            ans.set(end,temp);
            start++;
            end--;
        }

        return ans;
    }
}
