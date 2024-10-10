package Arrays;

public class GetSecondLargest {
    public static void main(String[] args) {

        int[] arr={10,10};
        System.out.println(getSecondLargest(arr));

    }
    public static int getSecondLargest(int[] arr) {
        // Code Here
        int largest=Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>=largest){
                largest=arr[i];
            }
        }

        int secondLargest=-1;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>secondLargest && arr[i]<largest){
                secondLargest=arr[i];
            }
        }

        return secondLargest;
    }


}
