package Arrays;

public class Second_Largest {
    public int print2largest(int[] arr) {
        // Code Here
        int max=Integer.MIN_VALUE;
        int secondMax=-1;
        for(int i:arr){
            if(max<i){
                max=i;
            }
        }


        for(int i:arr){
            if(secondMax<i && i<max){
                secondMax=i;
            }
        }



        return secondMax;
    }
}
