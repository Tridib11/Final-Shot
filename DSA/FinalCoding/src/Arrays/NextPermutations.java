package Arrays;

public class NextPermutations {
    public static void main(String[] args) {

    }

    public void nextPermutation(int[] nums) {
        int n=nums.length;

        int swapIndex=-1;
        for(int i=n-2;i>=0;i--){
            if(nums[i]<nums[i+1]){
                swapIndex=i;
                break;
            }
        }

        if(swapIndex==-1){
            reverse(nums,0,n-1);
            return;
        }

        for(int i=n-1;i>swapIndex;i--){
            if(nums[i]>nums[swapIndex]){
                int temp=nums[i];
                nums[i]=nums[swapIndex];
                nums[swapIndex]=temp;
                break;
            }
        }

        reverse(nums,swapIndex+1,n-1);

    }



    public void reverse(int[] arr,int start,int end){
        while(start<=end){
            int temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }
}
