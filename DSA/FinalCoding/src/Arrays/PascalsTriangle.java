package Arrays;

public class PascalsTriangle {
    public static void main(String[] args) {
        System.out.println(elementAtRowCol(3,2));

    }

    private static int elementAtRowCol(int n,int r){
        n=n-1;r=r-1;
        int res=1;
        for(int i=0;i<r;i++){
            res=res*(n-i);
            res=res/(i+1);
        }
        return res;
    }
}
