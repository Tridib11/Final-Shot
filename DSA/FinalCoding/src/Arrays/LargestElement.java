package Arrays;

public class LargestElement {
    public static void main(String[] args) {
        int[] arr={8,4,1};
        System.out.println(largest(arr));
    }

    public static int largest(int[] arr) {
        // code here
        int max=Integer.MIN_VALUE;
        for(int i:arr){
            if(max<i){
                max=i;
            }
        }
        return max;
    }
}
