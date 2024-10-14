package Arrays;

public class BuySellStocks {
    public static void main(String[] args) {
            int[] arr={3,4,1,5};
        System.out.println(maxProfit(arr));
    }

    public static int maxProfit(int[] prices) {
        int minimumSoFar=prices[0];
        int maxProfit=0;
        for(int i=0;i<prices.length;i++){
            minimumSoFar=Math.min(minimumSoFar,prices[i]);
            int profit=prices[i]-minimumSoFar;
            maxProfit=Math.max(profit,maxProfit);
        }
        return maxProfit;
    }
}
