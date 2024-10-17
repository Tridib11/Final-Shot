package Arrays;

public class MaxIndex {
    public static void main(String[] args) {
        int[] arr = {2, 4, 70, 6, 1};
        System.out.println(getMaxIndex(arr,0,arr.length-1));
    }

    static int getMaxIndex(int[] arr, int start, int end) {
        int max=Integer.MIN_VALUE;
        for(int i=start;i<=end;i++){
            if(arr[i]>max){
                max=i;
            }
        }
        return max;
    }
}
