package Arrays;

public class SetMatrixZero {
    public static void main(String[] args) {

    }

    public void setZeroes(int[][] matrix) {
        int x=1;
        int y=1;
        for(int i=0;i<matrix.length;i++){
            if(matrix[i][0]==0) x=0;
        }
        for(int i=0;i<matrix.length;i++){
            if(matrix[0][i]==0) y=0;
        }

        for(int i=1;i< matrix.length;i++){
            for(int j=1;j<matrix.length;j++){
                if(matrix[i][j]==0){
                    matrix[i][0]=0;
                    matrix[0][j]=0;
                }
            }
        }

        for(int j=1;j<matrix.length;j++){
            if(matrix[0][j]==0){
                for(int i=1;i<matrix.length;i++){
                    matrix[i][j]=0;
                }
            }
        }

        for(int i=1;i<matrix.length;i++){
            if(matrix[i][0]==0){
                for(int j=1;j< matrix.length;j++){
                    matrix[i][j]=0;
                }
            }
        }


        if(x==0){
            for(int i=0;i<matrix.length;i++){
                matrix[i][0]=0;
            }
        }

        if(y==0){
            for(int j=0;j< matrix.length;j++){
                matrix[0][j]=0;
            }
        }


    }
}
