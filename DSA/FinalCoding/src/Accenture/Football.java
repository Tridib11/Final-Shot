package Accenture;

public class Football {
    public static void main(String[] args) {
        String[] teams = {"Team A", "Team B", "Team C", "Team D", "Team E"};
        int[] goals = {5, 2, 3, 7, 4};
        String s=winingTeam(teams,goals);
        System.out.println(s);
    }

    private static String winingTeam(String[] teams, int[] goals) {
        String maxGoalsTeam="";
        int maxGoals=Integer.MIN_VALUE;


        for(int i=0;i<goals.length;i++){
            if(goals[i]>maxGoals){
                maxGoals=goals[i];
                maxGoalsTeam=teams[i];
            }
        }

        return maxGoalsTeam;



    }


}
