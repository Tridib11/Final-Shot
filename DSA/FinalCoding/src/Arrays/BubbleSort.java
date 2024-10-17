package Arrays;

public class BubbleSort {
    public static void main(String[] args) {

    }

    public static void bubbleSort(int arr[], int n)
    {
        //code here
        boolean swapped=false;
        for(int i=0;i<n;i++){
            for(int j=1;j<n-i;j++){
                if(arr[j]<arr[j-1]){
                    int temp=arr[j];
                    arr[j]=arr[j-1];
                    arr[j-1]=temp;
                    swapped=true;
                }
            }
            if(!swapped){
                return;
            }
        }
    }


}
