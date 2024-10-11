package Arrays;

public class missingNumber {


    public static void main(String[] args) {
        int[] arr={0,1};
        System.out.println(missingNumber(arr));
    }

    public static int missingNumber(int[] nums) {
        int n=nums.length;
        int sum=0;

        for(int i:nums){
            sum+=i;
        }
        int totalSum=n*(n+1)/2;
        return totalSum-sum;

    }
}
