package Arrays;

public class ReArrangeArrayElements {
    public static void main(String[] args) {

    }

    private static int[] rearrangeArray(int[] arr){
        int n=arr.length;
        int[] newArr=new int[n];
        int positiveIndex=0,negativeIndex=1;
        for(int i=0;i<arr.length;i++){
            if(arr[i]<0){
                newArr[negativeIndex]=arr[i];
                negativeIndex+=2;
            }else{
                newArr[positiveIndex]=arr[i];
                positiveIndex+=2;
            }
        }
        return newArr;
    }
}
