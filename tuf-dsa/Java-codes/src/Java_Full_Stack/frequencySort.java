package Java_Full_Stack;

import java.util.*;
class frequencySort {
    public static void main(String[] args) {
        String s="tree";
        String c=frequencySort(s);
        System.out.println(c);

    }
    public static String frequencySort(String s) {
        //your code goe shere

        HashMap<Character,Integer> map=new HashMap<>();

        for(char ch:s.toCharArray()){
            map.put(ch,map.getOrDefault(ch,0)+1);
        }

        List<Character> list=new ArrayList<>(map.keySet());
        System.out.println(list);
        list.sort((ob1,ob2)->map.get(ob2)-map.get(ob1));

        StringBuilder ans=new StringBuilder();
        for(char ch:list){
            for(int i=0;i<map.get(ch);i++){
                ans.append(ch);
            }
        }

        return ans.toString();

    }
}