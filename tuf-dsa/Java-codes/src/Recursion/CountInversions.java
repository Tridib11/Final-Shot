package Recursion;

public class CountInversions {

    public long numberOfInversions(int[] nums) {
        int length=nums.length;
        if(length<2){
            return 0;
        }
        int midIndex=length/2;
        int[] leftHalf=new int[midIndex];
        int[] rightHalf=new int[length-midIndex];
        //assingning all the values to the leftHalf
        for(int i=0;i<midIndex;i++){
            leftHalf[i]=nums[i];
        }
        //assingning all the values to the rightHalf
        for(int i=midIndex;i<length;i++){
            rightHalf[i-midIndex]=nums[i];
        }
        long leftInversions=numberOfInversions(leftHalf);
        long rightInversions=numberOfInversions(rightHalf);
        long mergeInversions=mergeSort(nums,leftHalf,rightHalf);
        return leftInversions+rightInversions+mergeInversions;
    }
    private static long mergeSort(int[] inputArr,int[] leftHalf,int[] rightHalf){
        int leftSize=leftHalf.length;
        int rightSize=rightHalf.length;
        int i=0,j=0,k=0;
        long count=0;
        while(i<leftSize && j<rightSize){
            if(leftHalf[i]<=rightHalf[j]){
                inputArr[k]=leftHalf[i];
                i++;
            }
            else{
                inputArr[k]=rightHalf[j];
                j++;
                count+=(leftSize-i);
            }
            k++;
        }

        while(i<leftSize){
            inputArr[k]=leftHalf[i];
            i++;
            k++;
        }

        while(j<rightSize){
            inputArr[k]=rightHalf[j];
            j++;
            k++;
        }

        return count;
    }
}