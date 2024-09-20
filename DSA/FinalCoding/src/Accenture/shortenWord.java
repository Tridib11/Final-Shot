package Accenture;

public class shortenWord {
    public static void main(String[] args) {
        String s="examination";
        char f=s.charAt(0);
        int l=s.length()-2;
        char last=s.charAt(s.length()-1);
        System.out.println(f+""+l+""+last);
    }
}
