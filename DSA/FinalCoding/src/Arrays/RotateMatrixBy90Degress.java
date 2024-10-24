package Arrays;


public class RotateMatrixBy90Degress {
    public void rotate(int[][] matrix) {
        transpose(matrix);
        reverse(matrix);
    }

    private void transpose(int[][] matrix){
        for(int i=0;i<matrix.length-1;i++){
            for(int j=i+1;j<matrix.length;j++){
                int temp=matrix[i][j];
                matrix[i][j]=matrix[j][i];
                matrix[j][i]=temp;
            }
        }
    }


    private void reverse(int[][] matrix){
        for(int r=0;r<matrix.length;r++){
            int left=0;
            int right=matrix.length-1;
            while(left<right){
                int temp=matrix[r][left];
                matrix[r][left]=matrix[r][right];
                matrix[r][right]=temp;
                left++;
                right--;
            }
        }
    }
}
