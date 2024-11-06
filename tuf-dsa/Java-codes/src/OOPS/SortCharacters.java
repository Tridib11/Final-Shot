package OOPS;
import java.util.*;
public class SortCharacters {

    public static void main(String[] args) {

        String s="tree";
        StringBuilder ans=new StringBuilder();

        Map<Character,Integer> map=new HashMap<>();
        for(char ch:s.toCharArray()){
            map.put(ch,map.getOrDefault(ch,0)+1);
        }
        System.out.println(map);
        List<Character> list=new ArrayList<>(map.keySet());
        list.sort((ob1,ob2)->map.get(ob2)-map.get(ob1));
        for(char ch:list){
            ans.append(ch);
        }
        System.out.println(ans);

    }
}

//TUF+
class Solution {
    public List<Character> frequencySort(String s) {
        //your code goe shere
        // StringBuilder ans=new StringBuilder();

        Map<Character,Integer> map=new HashMap<>();
        for(char ch:s.toCharArray()){
            map.put(ch,map.getOrDefault(ch,0)+1);
        }
        // System.out.println(map);
        List<Character> list=new ArrayList<>(map.keySet());
        list.sort((ob1, ob2) -> {
            int freqCompare = map.get(ob2) - map.get(ob1); // Descending frequency
            if (freqCompare != 0) {
                return freqCompare;
            }
            return ob1 - ob2; // Ascending alphabetical order for ties
        });

        // for(char ch:list){
        //     ans.append(ch);
        // }

        return list;


    }
}
