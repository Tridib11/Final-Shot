package Strings;

public class characterarray {
    public static void main(String[] args) {
        String s="";
        for(int i=0;i<=26;i++){
            char ch=(char)('a'+i);
            s+=ch;
            System.out.println(s);
        }
        System.out.println(s);
    }
}
