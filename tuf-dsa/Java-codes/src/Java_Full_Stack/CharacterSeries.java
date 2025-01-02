package Java_Full_Stack;

public class CharacterSeries {
    public static void main(String[] args) {
        String s="";
        for(int i=0;i<26;i++){
            char c=(char)('a'+i);
            s+=c;
        }
        System.out.println(s);
    }
}
