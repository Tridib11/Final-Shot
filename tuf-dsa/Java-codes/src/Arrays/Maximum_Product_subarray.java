package Arrays;

public class Maximum_Product_subarray {
    public static void main(String[] args) {

    }
    public int maxProduct(int[] nums) {
        int leftProduct=1;
        int rightProduct=1;
        int ans=nums[0];
        int n=nums.length;
        for(int i=0;i<n;i++){
            leftProduct=leftProduct==0?1:leftProduct;
            rightProduct=rightProduct==0?1:rightProduct;

            leftProduct*=nums[i];
            rightProduct*=nums[n-i-1];

            ans=Math.max(ans,Math.max(leftProduct,rightProduct));
        }

        return ans;
    }
}
