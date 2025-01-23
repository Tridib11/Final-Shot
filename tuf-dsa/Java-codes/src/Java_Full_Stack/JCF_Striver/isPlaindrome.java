package Java_Full_Stack.JCF_Striver;

class Solution {
    public boolean isPalindrome(String str) {

        String s=cleanString(str);
        int start=0,end=s.length()-1;
        while(start<=end){
            if(s.charAt(start)!=s.charAt(end)){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    private String cleanString(String s){
        StringBuilder clean=new StringBuilder();

        for(char c:s.toCharArray()){
            if(Character.isLetterOrDigit(c)){
                clean.append(Character.toLowerCase(c));
            }
        }

        return clean.toString();
    }
}