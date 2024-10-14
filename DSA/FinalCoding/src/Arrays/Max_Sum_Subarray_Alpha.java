package Arrays;

public class Max_Sum_Subarray_Alpha {
    public static void main(String[] args) {
        int[] nums={2,4,6,8,10};
        printMaxSum(nums);

    }

    private static void printMaxSum(int[] arr){
        int max_value=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                int curr_sum=0;
                for(int k=i;k<=j;k++){
                    curr_sum+=arr[k];
                }
                System.out.println(curr_sum);
                if(curr_sum>max_value){
                    max_value=curr_sum;
                }
            }
        }
        System.out.println("Max sum "+max_value);
    }
}
